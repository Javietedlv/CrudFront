import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#f1efe9",
    padding: '10px'

  },
  root: {
    backgroundColor: "red",
    color: "white",
  },
  Columna1: {
    padding: '10px'
  },
  contenedorColumnas:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

export default useStyles;
