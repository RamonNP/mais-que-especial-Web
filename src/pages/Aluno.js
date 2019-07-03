import React, { Component } from 'react';
import api from '../services/api';
import "./Aluno.css"

class Instituicao extends Component {

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        const response = await api.get('http://localhost:9001/users');
        console.log(response);
    }

    render() {
        return (
            <div id="form-aluno">
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                y</div>
                </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label"> Password </label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Instituicao