import React from 'react';
import './Login.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { isEmail } from 'validator';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import { login } from '../redux/actions/users'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: "",
            errorPassword: "",
            emailValidate: false,
            passwordValidate: false,
            formValidate: false,
            errorFormValidate: '',
        };
        this.emailInput = React.createRef();

    };


    handleSubmit = async (event, props) => {

        event.preventDefault();
        await this.validateForm();
        if (this.state.passwordValidate === true & this.state.emailValidate === true) this.setState({ formValidate: true })
        else this.setState({ errorFormValidate: 'El email o la contraseña no son válidos.' })
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        login(userData)

            .then(res => {
                // notification.success({message:'Login success', description: 'Successfully logged in'})
                 console.log(res.data);
                setTimeout(() => {
                    // console.log('logueado y cambiando de ruta');
                    return this.props.history.push('/home')
                }, 1500);
            })
            .catch(error => {
                const errorMsg = error.response?.data?.message;
                // notification.error({ message: 'Login failed', description: errorMsg });
            });


    };


    validateForm = () => {
        return new Promise((resolve, reject) => {
            this.validateEmail();
            this.validatePassword();
            resolve('form validado')
            reject('form no validado')
        })
    };
    validatePassword = () => {
        const password = this.state.password;
        if (password.length === 0) this.setState({ errorPassword: "La contraseña es requerida." })
        else if (password.length < 8) this.setState({ errorPassword: "La contraseña debe tener mínimo 8 carácteres." })
        else this.setState({ errorPassword: '', passwordValidate: true })
    };
    validateEmail = () => {
        const email = this.state.email;
        if (email.length === 0) this.setState({ errorEmail: "El email es requerido." })
        else if (!isEmail(email)) this.setState({ errorEmail: "Introduzca un email válido" })
        else this.setState({ errorEmail: '', emailValidate: true })
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };
    render() {
        return (
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <h1>Inicia sesión</h1>

                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Introduce un Email válido" ref={this.emailInput} />
                <div className="errorEmail"> {this.state.errorEmail} </div>
                <input type="password" name="password" value={this.password} onChange={this.handleChange} placeholder="Crea una contraseña." />
                <div className="errorPassword"> {this.state.errorPassword} </div>
                <button type="submit" disabled={this.state.validateForm}>Ok</button>
                <div className="errorFormValidate"> {this.state.errorFormValidate} </div>
                <h4>si no tienes cuenta, <NavLink to="/Register">Registrate</NavLink></h4>
            </form>
        )
    };
};

export default withRouter(Login);