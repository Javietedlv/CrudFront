import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Outlet, Link } from "react-router-dom";
import useStyles from "./styles";

const Layout = () => {
  const classes = useStyles();
  return (
    <div>
      <Table>
        <TableHead className={classes.Head}>
          <TableRow>
            <TableCell className={classes.celda}>
              <Button component={Link} to="/" className={classes.button}>
                <Typography variant="h6"> Inicio </Typography> 
              </Button>
            </TableCell>
            <TableCell className={classes.celda}>
              <Button component={Link} to="/about" className={classes.button}>
              <Typography variant="h6"> Informacion </Typography> 
              </Button>
            </TableCell>
            <TableCell className={classes.celda}>
              <Button component={Link} to="/Usuario" className={classes.button}> 
              <Typography variant="h6"> Usuarios </Typography> 
              </Button>
            </TableCell>
            <TableCell className={classes.celda}>
              <Button component={Link} to="/Oficio" className={classes.button}>
              <Typography variant="h6"> Oficio</Typography> 
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody />
      </Table>
      <Outlet />
    </div>
  );
};

export default Layout;
