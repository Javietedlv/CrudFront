import React, { useRef } from 'react';
import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { validateInput } from '../../Funciones/Funciones';


const Campo = ({ 
  label,
  value,
  onChange,
  name,
  maxLength,
  required,
  RegexProp
}) => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const showError = required && value[name] === '';


  const handleChange = () => {
    const newValue = inputRef.current.value;
    if (RegexProp && !validateInput(newValue, RegexProp)) {
      return;
    }
  
    if( maxLength === -1 || maxLength >= inputRef.current.value.length ){
      const newObjeto = {
        ...value,
        [name]: newValue
      };
      onChange(newObjeto);
    }
  };

   
  return (
    <Grid className={classes.box}>
      <Grid container>
        <Typography variant='h1' className={classes.label}>{label}</Typography>
        {required && <Typography>*</Typography> }
      </Grid>
      <Grid item className={classes.contenedor}>
        <input 
          // type={type} 
          value={value?.[name] || ''}
          ref={inputRef}
          onChange={handleChange} 
          className={classes.input}
        />
        {showError && (
          <Typography variant='caption' className={classes.errorText}>
            Campo obligatorio
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

Campo.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  type: PropTypes.oneOf(['text', 'number']),
  required: PropTypes.bool, 
};

Campo.defaultProps = {
  maxLength: -1,
  type: 'text',
  required: false,
};

export default Campo;
