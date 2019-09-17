import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import api from '../../services/api';

class Chart extends PureComponent {

    state = {
        data :  [
          { name: '10/01', Pontos: 2 },
          { name: '12/01', Pontos: 8 },
          { name: '13/01', Pontos: 5 },
          { name: '14/01', Pontos: 6 },
          
        ],
    };

    jogadas={login:"ramon", jogo:"3", tempo:"4", tentativas:"7", nrIdAluno:2}


    async componentDidMount() {
        this.loadPlay();
        //const response = await api.get('/especial/listaGames');
        //const response = await api.get('https://viacep.com.br/ws/01001000/json/');

         
        
        //console.log(this.state.games);
    };

    loadPlay = async () => {
        const response = await api.post('/especial/getPlayByUserAndGame', this.jogadas);
        this.setState({data:response.data});
        console.log(response);
        //this.setState({games : response.data});
    } 

    render() {
        
        return (
            
          <form id="form-id" onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-header">
              Ramon do Nascimento Pereira
            </div>
            <div className="card-body">
              <h5 className="card-title">Jogo do espaço </h5>
              <p className="card-text">Descrição do Jogos de Espaço With supporting text below as a natural lead-in to additional content.</p>
              
            </div> 
            </div>                 
      <div>
      <hr></hr>
        <LineChart
          width={500}
          height={200}
          data={this.state.data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dtInserida" />
          <YAxis />
          <Tooltip />
          <Line connectNulls type="monotone" dataKey="tentativas" stroke="#8884d8" fill="#8884d8" />
          <Line connectNulls type="monotone" dataKey="tempo" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </div>
  </form>
        )
    }
}

export default Chart