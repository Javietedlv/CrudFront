import { makeStyles } from "@material-ui/core/styles";
import { coloresTabla } from "../../Constantes/Paleta";

const useStyles = makeStyles({
    boton:{
        padding: 0,
        margin: '5px',
        fontFamily: 'system-ui',
        fontSize: '.8rem',
        backgroundColor: coloresTabla.Headers ,
        width: '100px',
        height: '50px',
        borderRadius: 10,
        "&:hover, &:focus": {
            backgroundColor: coloresTabla.Headers ,
          }
    },
});

export default useStyles;
