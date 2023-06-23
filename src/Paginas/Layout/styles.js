import { makeStyles } from "@material-ui/core/styles";
import { coloresTabla } from "../../Constantes/Paleta";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#f1efe9"
  },
  Head: {
    backgroundColor: '#ffffff'
  },
  button: {
    padding: 0,
    fontSize: "inherit",
    backgroundColor: coloresTabla.Headers ,
    width: '99.8%',
    height: '50px',
    borderRadius: 0,
    borderBottom: '2px solid transparent',
    margin: '0px 1px 0px 1px',
    "&:hover, &:focus": {
        backgroundColor: coloresTabla.Headers ,
        borderColor: coloresTabla.BorderHover,
      }
  },
  celda: {
    textAlign: 'center',
    padding: 0,
    borderRight: '1px solid',
    borderColor: coloresTabla.BorderHover,
    // borderLeft:'1px solid',
  },
});

export default useStyles;
