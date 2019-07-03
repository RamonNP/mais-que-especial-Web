import React, { Component } from 'react';

import "./Forms.css";
import api from '../services/api';
class Instituicao extends Component {

    state = {
        descRua:'',
        descBairro:'',
        descCidade:'',
        nrIddetalhesCadastro:'',
        codSexo:'',
        descCpfCnpj:'',
        descNome:'',
        descSobrenome:'',
        dtNascimento:'',
        nrCelular:'',
        nrTelefone:''
    }

    Instituicao ={
        nrIdInstituicao:'',
        acesso:{
          nrIddetalhesCadastro:''
        },
        detalheCadastro:{
          nrIddetalhesCadastro:'',
          codSexo:'',
          descCpfCnpj:'',
          descNome:'',
          descSobrenome:'',
          dtNascimento:'',
          nrCelular:'',
          nrTelefone:''
        },
        endereco:{
          nrIdEndereco:'',
          descRua:'',
          descBairro:'',
          descCidade:''

        }
      }
    handleSubmit = async e => {
        e.preventDefault();

        this.Instituicao.endereco.descRua=this.state.descRua
        this.Instituicao.endereco.descBairro=this.state.descBairro
        this.Instituicao.endereco.descCidade=this.state.descCidade
        console.log(this.Instituicao);
        await api.post('/sistema-transp/especial/addInstituicao',
        this.Instituicao
        );
        this.props.history.push('/');
    }
    handlerChange = e => {
        //console.log(e.target);
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            
			<form id="form-id" onSubmit={this.handleSubmit}>
                <div className="card text-white bg-primary mb-3 cardsCustom" id="cards">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

        <div className="form-row">
				<div className="form-group col-md-2">
                    <label for="nrIddetalhesCadastro">ID</label>
                    <input type="text" name="nrIddetalhesCadastro" placeholder="ID" readOnly className="form-control"
                        onChange = {this.handlerChange} value = {this.state.nrIddetalhesCadastro}/>
				</div>
				<div className="form-group col-md-5">
                    <label for="codSexo">Sexo</label>
                    <input type="text" name="codSexo" placeholder="Digite a Rua" className="form-control"
                        onChange = {this.handlerChange} value = {this.state.codSexo}/>
				</div>
				<div className="form-group col-md-5">
                    <label for="descCpfCnpj">CPF CNPF</label>
                    <input type="text" name="descCpfCnpj" placeholder="Digite a descCpfCnpj" className="form-control"
                        onChange = {this.handlerChange} value = {this.state.descCpfCnpj}/>
				</div>
			</div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>










            <hr />
			
            <div className="row">
				<div className="form-group col-md-4">
                    <input type="text" name="descNome" placeholder="Digite a descNome" 
                        onChange = {this.handlerChange} value = {this.state.descNome}/>
				</div>
				<div className="form-group col-md-4">
                    <input type="text" name="descSobrenome" placeholder="Digite a descSobrenome" 
                        onChange = {this.handlerChange} value = {this.state.descSobrenome}/>                
				</div>
				<div className="form-group col-md-4">
                    <input type="text" name="dtNascimento" placeholder="Digite a dtNascimento" 
                        onChange = {this.handlerChange} value = {this.state.dtNascimento}/>
				</div>
			</div>
           

                    <input type="text" name="nrCelular" placeholder="Digite a nrCelular" 
                        onChange = {this.handlerChange} value = {this.state.nrCelular}/>
                <input type="text" name="descRua" placeholder="Digite a Rua" onChange = {this.handlerChange} value = {this.state.descRua}/>
                <input type="text" name="nrTelefone" placeholder="Digite a nrTelefone" onChange = {this.handlerChange} value = {this.state.nrTelefone}/>
                <input type="text" name="descRua" placeholder="Digite a Rua" onChange = {this.handlerChange} value = {this.state.descRua}/>
                <input type="text" name="descRua" placeholder="Digite a Rua" onChange = {this.handlerChange} value = {this.state.descRua}/>
                <input
                    type="text"
                    name="descCidade"
                    placeholder="Digite a Cidade"
                    onChange = {this.handlerChange}
                    value = {this.state.descCidade}
                    />                
                <input
                    type="text"
                    name="descBairro"
                    placeholder="Digite a Bairro"
                    onChange={this.handlerChange}
                    value={this.state.descBairro}
                    />
            <div className="row">
				<div className="form-group col-md-4">
                    
				</div>
				<div className="form-group col-md-4">
                    
				</div>
				<div className="form-group col-md-4">
                   
				</div>
			</div>
                    <button type="submit">Salvar</button>
            </form>
        )
    }
}

export default Instituicao