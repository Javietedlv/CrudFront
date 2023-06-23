import Table from "../../Componentes/Table/Index";
import { USERS } from "../../Constantes/ConfigBack";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const Usuarios = () => {
  const Headers = ["Nombre", "Apellido", "Edad", "Oficio"];
  const location = useLocation();
  const classes = useStyles();

  return (
    <Grid className={classes.main}>
      <h1>Listado</h1>
      <Table Encabezados={Headers} Apikey={USERS} Location={location} />
    </Grid>
  );
};

export default Usuarios;
