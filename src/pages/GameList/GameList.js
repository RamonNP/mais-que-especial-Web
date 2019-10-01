import React, { Component } from 'react';
import api from '../../services/api';
import "./GameList.css"
import { Link } from 'react-router-dom'

class GameList extends Component {

    state = {
        games : [],
    };

    async componentDidMount() {
        this.loadUsers();
        //const response = await api.get('/especial/listaGames');
        //const response = await api.get('https://viacep.com.br/ws/01001000/json/');

         
        //this.setState({games : response.data});
        //console.log(this.state.games);
    };

    loadUsers = async () => {
        const response = await api.get('/especial/web/listaGames');
        this.setState({games:response.data});
        console.log(response);
    } 

    render() {
        
        return (
            
            <form id="form-id" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    {this.state.games.map( games => (
                         <div className="form-group col-md-4">
                             <div className="card border-secondary mb-3" id="cardsCustom">
                                 <div className="card-header">{games.descnome}</div>
                                 <div className="card-body text-secondary">
                                 
                                 <img src={games.descImg} alt="" className="imgGame" id="imgGame"/> 
                                 
                                 <hr></hr>
                                 <p className="card-text">{games.descDetalhe}</p>
                                 </div>
                                 <Link to={'/Game/'+games.nridjogo} id="idAcessar">Acessar</Link>
                             </div>
                         </div>                    
                    
                    ))}
                </div>
            </form>
        )
    }
}

export default GameList