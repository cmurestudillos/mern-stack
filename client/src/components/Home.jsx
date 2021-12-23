import React, { Component, Fragment } from 'react';
// Paticion a BBDD
import axios from 'axios';
import Swal from 'sweetalert2';

class Home extends Component {
    state = {
        usuarios: [],
    }

    componentDidMount(){  
        this.getUsuarios();
    }

    getUsuarios(){
        axios.get(`https://stack-node-server.herokuapp.com/api/usuarios`).then((response) => {
            const usuarios = response.data.data;
            this.setState({ usuarios });
        }).catch(error => {
            console.log(error);
        });
    };

    borrarUsuario = (userId) =>{
        axios.delete(`https://stack-node-server.herokuapp.com/api/usuarios/${userId}`)
        .then(res => {
            this.setState({
                usuarios: this.state.usuarios.filter(item => item.id !== userId)
            });
        })
        .catch(e => {
          console.log(e.response);
        }) 
    }; 

    render(){ 
        return(
            <Fragment>
                <div className='container m-container'>
                    { this.state.usuarios.map(person => 
                        <div className="card mb-3" key={person.id}>
                            <div className="row g-0">
                                <div className="col-md-4 text-center">
                                    <img src={person.avatar} className="img-fluid rounded-circle shadow p-3 mb-3 mt-3 bg-body rounded" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{person.first_name} {person.last_name}</h5>
                                        <p className="card-text">{person.email}</p>
                                        <div className="card-text">
                                            <div className="d-grid gap-2 d-md-block">
                                                <button className="btn btn-outline-warning btn-lg w-25 m-1" type="button">Editar</button>
                                                <button className="btn btn-outline-danger btn-lg w-25 m-1" type="button" onClick={() => this.borrarUsuario(person.id)}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                             
                    )}
                </div>
            </Fragment>
        );
    }
}
 
export default Home;