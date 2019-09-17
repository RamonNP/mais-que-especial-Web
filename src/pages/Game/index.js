import React, { Component } from 'react';
import api from '../../services/api';
import "./Game.css"



class Game extends Component {

    state = {
       GameInfo: {},
       nridjogo:0,
       img:'',
       descnome:'',
       nriddiciplina:'',
       descDetalhe:'',
       disable:true,
       value: 'coconut'
    };


    handleSubmit = e => {
        e.preventDefault();

        const data = new FormData();
        
        data.append('nridjogo', this.state.nridjogo);
        data.append('img', this.state.img);
        data.append('descnome', this.state.descnome);
        data.append('nriddiciplina', this.state.nriddiciplina);
        data.append('descDetalhe', this.state.descDetalhe);

        console.log(this.state);
        
    }
    handleChangeCombo = e => {
        this.setState({ value: e.target.value });
        this.setState({ nriddiciplina:e.target.value});
        
    }

   // handleChangeCombo(event) {
    //    this.setState({value: event.target.value});
    //  }

    handleEditChange = e => {
        this.setState({ disable: false});
    }

    handleImageChange = e => {
        //this.setState({ img: e.target.file[0] });
        console.log(e);
    }

    componentDidMount() {
        this.loadGame();
    }

    loadGame = async () => {
        const { id } = this.props.match.params;
        const response = await api.get('/especial/web/recuperarJogo/'+id);

        this.setState({ GameInfo:response.data });
        this.setState({ img:response.data.descImg});
        this.setState({ nriddiciplina:response.data.nriddiciplina });
        this.setState({ descDetalhe:response.data.descDetalhe });
        this.setState({ descnome:response.data.descnome });
        this.setState({ nridjogo:response.data.nridjogo });
    }

    render() {
        //const { GameInfo } = this.state;
        return (
            <form id="form-id" onSubmit={this.handleSubmit}>
                    <input 
                    disabled={this.state.disable}
                        type="text"
                        name="img"
                        placeholder="Link Imagem"
                        onChange={this.handleChange}
                        value={this.state.img}
                    />
                                        <input 
                    disabled={true}
                        type="text"
                        name="nridjogo"
                        placeholder="Numero Jogo"
                        onChange={this.handleChange}
                        value={this.state.nridjogo}
                    />
                    <input 
                        disabled={this.state.disable}
                        type="text"
                        name="descnome"
                        placeholder="Nome do Jogo"
                        onChange={this.handleChange}
                        value={this.state.descnome}
                    />
                    <input 
                        disabled={this.state.disable}
                        type="text"
                        name="descDetalhe"
                        placeholder="Descrição do Jogo"
                        onChange={this.handleChange}
                        value={this.state.descDetalhe}
                    />
                    <select disabled={this.state.disable} value={this.state.value} onChange={this.handleChangeCombo} >
                        <option value="1">Diciplina 1</option>
                        <option value="2">Diciplina 2</option>
                        <option value="3">Diciplina 3</option>
                        <option value="4">Diciplina 4</option>
                    </select>
                    <input 
                        disabled={this.state.disable}
                        type="text"
                        name="nriddiciplina"
                        placeholder="DIciplina"
                        onChange={this.handleChange}
                        value={this.state.nriddiciplina}
                    />
                    <button type="submit" hidden={this.state.disable} >Salvar</button>
                    <button   onClick={this.handleEditChange} hidden={!this.state.disable} >Editar</button>
            </form>
                  

        )
    }
}

export default Game