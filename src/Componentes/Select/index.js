import React, { useCallback, useEffect, useRef, useState } from 'react';
import useStyles from './styles';
import { Grid, Typography, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BackAdress } from '../../Constantes/ConfigBack';


const SelectPersonalizado = ({ 
  label,
  value,
  onChange,
  name,
  required,
  Apikey,
  options,
}) => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const showError = required && !Boolean(value[name]);
  const [opcionesMostrar, setOpcionesMostrar] = useState([{ _id: 0 , Nombre:'No hay registros'}])

  const cargarOpciones = useCallback(async () => {
    if(Apikey){
    try {
      const OpcionesProm = await axios.get(`${BackAdress}/api${Apikey}`); 
      const OpcionesFiltradas = OpcionesProm.data.map(({ _id, Nombre }) => ({ _id, Nombre }));
      console.log(OpcionesFiltradas)
      setOpcionesMostrar(OpcionesFiltradas)
    } catch (error) {
      console.error(error);
    }
    }else if(options){
      setOpcionesMostrar(options);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    cargarOpciones()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const handleChange = (e) => {
    const newValue = e.target.value;
      const newObjeto = {
        ...value,
        [name]: newValue
      };
      onChange(newObjeto);
      };

  return (
    <Grid className={classes.box}>
      <Grid container>
        <Typography variant='h1' className={classes.label}>{label}</Typography>
        {required && <Typography>*</Typography> }
      </Grid>
      <Grid item className={classes.contenedor}>
      <Select
      variant='outlined'
       className={classes.innerSelect}
       onChange={handleChange}
       ref={inputRef}
       value={value?.[name] || ''}
       >
        {opcionesMostrar.map(({ _id, Nombre }) => (
        <MenuItem key={_id} value={_id}>{Nombre}</MenuItem>
      ))}
      </Select>
        {showError && (
          <Typography variant='caption' className={classes.errorText}>
            Campo obligatorio
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

SelectPersonalizado.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool, 
};

SelectPersonalizado.defaultProps = {
  required: false,
};

export default SelectPersonalizado;
