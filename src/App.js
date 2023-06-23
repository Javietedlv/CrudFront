import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";


import Layout from "./Paginas/Layout/Layout";
import About from "./Paginas/About";
import Home from "./Paginas/Home";
import Default from "./Paginas/Default";
import Usuario from "./Paginas/Usuario/index";
import Usuarios from "./Paginas/Usuarios";
import Oficios from "./Paginas/Oficios";
import Oficio from "./Paginas/Oficio"

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "#f1efe9";
    document.body.style.margin = '0';
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Grid>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Usuario" element={<Usuarios />} />
          <Route path="/Usuario/Formulario" element={<Usuario/>} />
          <Route path="/Oficio" element={<Oficios/>} />
          <Route path="/Oficio/Formulario" element={<Oficio/>} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </Grid>
  );
}

export default App;
