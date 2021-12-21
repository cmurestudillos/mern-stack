import React, { Component, Fragment } from 'react';
// Paticion a BBDD
import axios from 'axios'

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
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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