import React, { Component } from 'react';
// Rutas
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// Componentes
import Header from './../components/shared/Header';
import Footer from './../components/shared/Footer';
import Home from './../components/Home';
import CrearUsuario from './../components/actions/CrearUsuario';
import EditarUsuario from './../components/actions/EditarUsuario';

class Router extends Component {
    render() { 
        return(
            <BrowserRouter>
                <Header />  
                {/* Configuracion de rutas y paginas */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/inicio" element={<Home />} />
                    <Route exact path="/crear" element={<CrearUsuario />} />
                    <Route exact path="/editar/:id" element={<EditarUsuario />} />
                </Routes>
                {/* Footer */}
                <Footer />
            </BrowserRouter>            
        );
    }
}
 
export default Router;
