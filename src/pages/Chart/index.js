import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import api from '../../services/api';

class Chart extends PureComponent {

    state = {
        data :  [
         
          
        ],
    };

    jogadas={login:"ramon", jogo:"1", tempo:"4", tentativas:"7", nrIdAluno:1}



    async componentDidMount() {
        this.loadPlay();
        //const response = await api.get('/especial/listaGames');
        //const response = await api.get('https://viacep.com.br/ws/01001000/json/');

         
        
        //console.log(this.state.games);
    };

    loadPlay = async () => {
        const { id } = this.props.match.params;
        this.jogadas.nrIdAluno = id;
        //console.log(this.props);
        const response = await api.post('/especial/getPlayByUserAndGame', this.jogadas);
        this.setState({data:response.data});
        console.log(response);
        //this.setState({games : response.data});
    } 

    render() {
        return (        
          <form id="form-id" onSubmit={this.handleSubmit}>
             <div className="form-row">
                {this.state.data.map( game => (
                  <div className="card" key={game.id}>
                    <div className="card-header">
                    {game.nome}
                    </div>
                      <div className="card-body">
                       
                        <p className="card-text"> {game.jogo}</p>
                      </div> 
                          
                          <LineChart
                        width={500}
                        height={200}
                        data={game.jogadas}
                        margin={{
                          top: 10, right: 30, left: 0, bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dataCriado" />
                        <YAxis />
                        <Tooltip />
                        <Line connectNulls type="monotone" dataKey="tentativas" stroke="#888500" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="tempo" stroke="#8884d8" fill="#8884d8" />
                      </LineChart>

                      
                    </div>                                  
                
                ))}
            </div>
          </form>
        )
    }
}

export default Chart