import Table from "../../Componentes/Table/Index";
import { OFICIOS } from "../../Constantes/ConfigBack";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

const Oficios = () => {
  const Headers = ["Nombre", "Sector", "Descripcion"];
  const location = useLocation();
  const classes = useStyles();

  return (
      <Grid className={classes.main}>
        <h1>Listado</h1>
        <Table Encabezados={Headers} Apikey={OFICIOS} Location={location} />
      </Grid>
  );
};

export default Oficios;
