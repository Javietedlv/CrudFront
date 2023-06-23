import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const Boton = ({ text, toDo }) => {
  const classes = useStyles();

  return (
  <Button
  className={classes.boton}
  onClick={toDo}
  >
    {text}
  </Button>
  );
};

Boton.propTypes = {
  text: PropTypes.string,
};

Boton.defaultProps = {
  text: "",
};

export default Boton;
