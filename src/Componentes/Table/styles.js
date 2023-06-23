import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    Outside:{
        padding: '15px',
    },
    NuevoContainer:{
        textAlign: 'right',
        padding: '0px 25px 0px 25px'
    },
    Nuevo:{
        borderRadius: "20px",
    },
    Tabla:{
        width: '100%',
        borderCollapse: 'collapse',
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid black",
    },
    ListaEncabezados: {
        width: '100%',
        background: '#e79e9e'
    },
    Encabezados:{
        fontFamily: 'sans-serif',
        padding: '10px 0px 10px 0px'
    },
    Acciones:{
        width: '10%',
        fontFamily: 'sans-serif',
    },
    Contenido:{
        fontFamily: 'sans-serif',
        borderWidth: '1px',
        padding: '10px 0px 10px 0px',
        textAlign: "center",
        color: '#4e4545'

    },
    Body:{
        background: '#fbfbfb',
        border: '1px solid #ddd',
        "&:hover": {
            backgroundColor: '#ede2e2' ,
          }
    },
    Boton:{
        borderRadius: "50px",
        padding: '15px',
    },
    Dialog:{
    padding: '15px 20px 15px 20px',
    },
    boxDialog:{
        textAlign: 'end',
        paddingTop: '35px'
    },
    contenedorRegistros:{
        minHeight: '200px',
        backgroundColor: '#fbfbfb',
    },
    textoCentrado:{
        textAlign: 'center',
    },
    registrosWrapper:{
        minHeight: '450px' ,
        backgroundColor: '#fbfbfb',
        borderRadius: "8px",
    }

});

export default useStyles;
