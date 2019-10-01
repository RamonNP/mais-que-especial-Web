import React, { Component } from 'react';
import api from '../../services/api';
import "./AlunoList.css"
import { Link } from 'react-router-dom'

class AlunoList extends Component {

    state = {
        games : [],
    };

    async componentDidMount() {
        this.loadAlunos();
        //const response = await api.get('/especial/listaGames');
        //const response = await api.get('https://viacep.com.br/ws/01001000/json/');

         
        //this.setState({games : response.data});
        //console.log(this.state.games);
    };

    loadAlunos = async () => {
        const response = await api.get('/especial/getAlunos');
        this.setState({games:response.data});
        console.log(response);
    } 

    render() {
        
        return (
            
            <form id="form-id" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    {this.state.games.map( games => (
                         <div className="form-group col-md-4" key={games.id}>
                             <div className="card border-secondary mb-3" id="cardsCustom">
                                 <div className="card-header">Professor : {games.professor}</div>
                                 <div className="card-body text-secondary">
                                 <h5 className="card-title">{games.nome}</h5>
                                 
                                    <img src={games.avatar}  className="userImg" alt="" id="userImg"/> 
                                    <Link to={'/Chart/'+games.id} id="idAcessar">Acessar</Link>
                                
                                 <hr></hr>
                                 <p className="card-text">Data de Nascimento:{games.idade}</p>
                                 </div>
                             </div>
                         </div>                    
                    
                    ))}
                </div>
            </form>
        )
    }
}

export default AlunoList