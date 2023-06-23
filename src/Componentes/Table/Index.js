import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { useEffect, useState } from "react";
import { BackAdress } from "../../Constantes/ConfigBack";
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { Box, Button, Dialog, Grid, Typography } from "@material-ui/core";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Table = ({ Encabezados, Apikey, Location }) => {
  const navigate = useNavigate(); //Navegar entre paginas
  const classes = useStyles(); //Funcion que importa los estilos
  const [Registros, setRegistros] = useState([]); //Variable donde se guardan los registros
  const [open, setOpen] = useState(false); //Flag para abrir el dialog
  const [saveID, setSaveID] = useState(); //Guarda el id del registro a eliminar

  //Funcion que obtiene los registros
  const obtenerRegistros = async () => {
    try {
      const registrosProm = await axios.get(BackAdress + "/api" + Apikey);
      setRegistros(registrosProm.data);
    } catch (error) {
      console.error(error);
      toast.error("Ocurrio un error");
      return;
    }
  };

  //Cargar registros en tabla
  useEffect(() => {
    obtenerRegistros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Nuevo = () => {
      navigate(Location.pathname + `/Formulario`)
  }

  //Dirigirse a alta pero con la informacion del registro seleccionado
  const onEdit = (id) => {
    // navigate(`/Alta?id=${id}`);
    navigate(`${Location.pathname}/Formulario?id=${id}`);
  };

  //Abrir Dialog para eliminar el registro
  const onDelete = (e) => {
    setOpen(true);
    setSaveID(e);
  };

  //Cerrar el Dialog
  const closeDialog = () => {
    setOpen(false);
    setSaveID();
  };

  //Cambiar propiedad Activo a false y asi no se puede visualizar en el listado
  // eslint-disable-next-line no-unused-vars
  const deleted = async () => {
    try {
      await axios.put(`${BackAdress}/api${Apikey}/delete/${saveID}`);
      toast.success("Acción completada con éxito");
      setOpen(false);
      obtenerRegistros();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrio un error");
    }
  };

  //Borrado en base de datos
  // eslint-disable-next-line no-unused-vars
  const permanentDeleted = async () => {
    try {
      await axios.delete(`${BackAdress}/api${Apikey}/${saveID}`);
      toast.success("Acción completada con éxito");
      setOpen(false);
      obtenerRegistros();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrio un error");
    }
  };


  return (
    <Grid>
      <Grid className={classes.NuevoContainer}>
      <Button 
      className={classes.Nuevo}
      color="secondary"
      size="medium" 
      variant="contained"
      onClick={Nuevo}
      >
        Nuevo
      </Button>
      </Grid>
      <Grid className={classes.Outside}>
        <div className={classes.registrosWrapper}>
          <table className={classes.Tabla}>
            <thead>
              <tr className={classes.ListaEncabezados}>
                {Encabezados.map((titles, index) => {
                  return <th key={index} className={classes.Encabezados}>{titles}</th>;
                })}
                <th className={classes.Acciones}>Acciones</th>
              </tr>
            </thead>
            <tbody className={classes.contenedorRegistros}>
              {Registros[0] ? (
                Registros.map((registro, index) => (
                  <tr key={index} className={classes.Body}>
                    {Encabezados.map((columna) => (
                      <td key={columna} className={classes.Contenido}>
                      {typeof registro[columna] === 'object' && registro[columna] !== null
                        ? registro[columna].Nombre
                        : registro[columna] || "- - -"}
                    </td>
                    ))}
                    <td className={classes.Acciones} style={{ display: "flex" }}>
                      <Button
                        className={classes.Boton}
                        onClick={() => onEdit(registro._id)}
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        className={classes.Boton}
                        onClick={() => onDelete(registro._id)}
                      >
                        <BiTrashAlt />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className={classes.textoCentrado}>
                  <td colSpan={Encabezados.length + 1}>
                    <Typography style={{ marginTop: "200px" }} variant="h6">
                      No hay registros para mostrar
                    </Typography>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Dialog open={open} maxWidth={"xs"} fullWidth={true}>
          <Grid className={classes.Dialog}>
            <Typography>
              ¿Estás seguro que quieres borrar el registro?
            </Typography>
            <Box className={classes.boxDialog} >
              <Button
                color="secondary"
                size="medium"
                variant="contained"
                onClick={deleted}
                // onClick={permanentDeleted}
              >
                {" "}
                Aceptar
              </Button>
              <Button
                color="secondary"
                size="medium"
                variant="outlined"
                onClick={closeDialog}
              >
                {" "}
                Cancelar
              </Button>
            </Box>
          </Grid>
        </Dialog>
      </Grid>
    </Grid>
  );
};
Table.prototype = {
  //Encabezados de la tabla, deben de tener el mismo nombre que el registro
  Encabezados: PropTypes.array,
  //Apikey para acceder a las consultas
  Apikey: PropTypes.string,
};

export default Table;
