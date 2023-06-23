import { Grid, Typography } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import useStyles from "./styles";
import { useCallback, useEffect, useState } from "react";
import Campo from "../../Componentes/Campo";
import Boton from "../../Componentes/Boton";
import axios from "axios";
import { BackAdress, OFICIOS } from "../../Constantes/ConfigBack";
import { toast } from "react-toastify";
import SelectPersonalizado from "../../Componentes/Select";

const Oficio = () => {
  const classes = useStyles();
  const [objeto, setObjeto] = useState({
    Nombre: "",
    Sector: "",
    Descripcion: "",
  });

  const [formErrors, setFormErrors] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const guardar = async () => {
    if (!objeto.Nombre || !objeto.Sector)
      return toast.error("Existen campos obligatorios sin llenar");

    try {
      id
        ? await axios.put(`${BackAdress}/api${OFICIOS}/${id}`, objeto)
        : await axios.post(`${BackAdress}/api${OFICIOS}`, objeto);
      toast.success("Acción completada con éxito");
      regresar();
    } catch (error) {
      if (error.response && error.response.status === 500) {
        const errorMessage = error.response.data;
        toast.error(errorMessage);
      } else {
        console.error(error);
      }
    }
  };

  const regresar = () => {
    navigate(`/Oficio`);
  };

  const informacionInicial = useCallback(async () => {
    try {
      const response = await axios.get(`${BackAdress}/api${OFICIOS}${id}`);
      setObjeto(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      informacionInicial();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [informacionInicial]);

  const options = [
    {_id: 'Primario', Nombre: 'Primario'},
    {_id: 'Secundario', Nombre: 'Secundario'},
    {_id: 'Terciario', Nombre: 'Terciario'},
  ]

  return (
    <Grid className={classes.main}>
      <Typography variant="h5">Alta de Oficios</Typography>

      <Grid className={classes.contenedorColumnas}>
        <Grid className={classes.Columna1}>
          <Grid item xs={12}>
            <Campo
              label="Nombre"
              value={objeto || ""}
              onChange={setObjeto}
              name="Nombre"
              maxLength={50}
              required={true}
              setErrors={setFormErrors}
              errors={formErrors}
              RegexProp="letters"
            />
          </Grid>
          <Grid item xs={12}>
            <SelectPersonalizado
              label="Sector"
              name="Sector"
              onChange={setObjeto}
              value={objeto || ""}
              required={true}
              options={options}
            />
          </Grid>
          <Grid item xs={12}>
            <Campo
              label="Descripcion"
              value={objeto || ""}
              onChange={setObjeto}
              name="Descripcion"
              maxLength={100}
              setErrors={setFormErrors}
              errors={formErrors}
            />
          </Grid>
        </Grid>
        <Grid>
          <Boton text="Guardar" toDo={guardar} />
          <Boton text="Cancelar" toDo={regresar} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Oficio;
