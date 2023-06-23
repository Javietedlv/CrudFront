import { Grid, Typography } from "@material-ui/core";
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


import useStyles from "./styles";
import { useCallback, useEffect, useState } from "react";
import Campo from "../../Componentes/Campo";
import Boton from "../../Componentes/Boton";
import axios from "axios";
import { BackAdress, USERS, OFICIOS } from "../../Constantes/ConfigBack";
import { toast } from "react-toastify";
import SelectPersonalizado from "../../Componentes/Select";

const Usuario = () => {
  const classes = useStyles();
  const [objeto, setObjeto] = useState({
    Nombre: '',
    Apellido: '',
    Edad: '',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const guardar = async () => {

    if(!objeto.Nombre || !objeto.Apellido || !objeto.Oficio  ) return ( toast.error('Existen campos obligatorios sin llenar') )

    try {
      id ? 
      await axios.put(`${BackAdress}/api${USERS}/${id}`, objeto) 
      : await axios.post(`${BackAdress}/api${USERS}`, objeto);
      toast.success('Acción completada con éxito');
      regresar();
    } catch (error) {
      if (error.response && error.response.status === 500) {
        const errorMessage = error.response.data;
        toast.error(errorMessage);
      }else{
        console.error(error);
      }
    }
  };

  const regresar = () => {
    navigate(`/Usuario`)
  };

  const informacionInicial = useCallback(async () => {
    try {
      const response = await axios.get(`${BackAdress}/api${USERS}${id}`); 
      setObjeto(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    if(id){
      informacionInicial();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [informacionInicial]);

  return (
    <Grid className={classes.main}>
      <Typography variant="h5">Alta de usuarios</Typography>

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
              RegexProp='letters'
            />
          </Grid>
          <Grid item xs={12}>
            <Campo
              label="Apellido"
              value={objeto || ""}
              onChange={setObjeto}
              name="Apellido"
              maxLength={50}
              required={true}
              RegexProp='letters'
            />
          </Grid>
          <Grid item xs={12}>
            <Campo
              label="Edad"
              value={objeto || ""}
              onChange={setObjeto}
              name="Edad"
              maxLength={4}
              type='number'
              positive={true}
              RegexProp='positiveNumbers'
            />
          </Grid>
          <Grid item xs={12}>
            <SelectPersonalizado
            label='Oficio'
            Apikey={OFICIOS}
            name='Oficio'
            onChange={setObjeto}
            value={objeto || ""}
            required={true}
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

export default Usuario;
