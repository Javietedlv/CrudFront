const validations = {
    letters: /^[A-Za-záéíóúüÁÉÍÓÚÜ´¨.,ñÑ ]*$/,               // Expresión regular para solo letras
    numbers: /^[0-9]+$/,                                 // Expresión regular para solo números
    positiveNumbers: /^[1-9][0-9]*$/,                    // Expresión regular para números positivos
  };
  
    export  const validateInput = (input, validationType) => {
    const regex = validations[validationType];
    if (input === '') {
        return true;
      }

    return regexValidation(input, regex);
    
  };

   const regexValidation = (input, regex) => {
    return regex.test(input);
  };