import React from 'react';
import { NavLink } from 'react-router-dom';
import { isEmail } from 'validator';
import './Register.scss';
import { register } from '../redux/actions/users'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errorName: '',
            errorEmail: "",
            errorPassword: "",
            errorPasswordConfirm: "",
            nameValidate: false,
            emailValidate: false,
            passwordValidate: false,
            passwordConfirmValidate: false,
            formValidate: false,
        };
        this.emailInput = React.createRef();
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        await this.validateForm();
        if (this.state.nameValidate === true & this.state.passwordValidate === true & this.state.emailValidate === true & this.state.passwordConfirmValidate === true) this.setState({ formValidate: true })

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        register(user)
            .then(res => {
                if (res)
                    (setTimeout(() => {
                        console.log('registrado y cambiando de ruta');
                        return this.props.history.push('/login')
                    }, 500))
            })
            .catch(error => {
                console.log(error);
            });
    };

    validateForm = () => {
        return new Promise((resolve, reject) => {
            this.validateEmail();
            this.validatePassword();
            this.validateMatchPassword();
            this.validateName();
            resolve('form validado')
            reject('form no validado')
        })
    };
    validateName = () => {
        const name = this.state.name;
        if (name.length === 0) this.setState({ errorName: "Introduce un nombre." })
        else if (name.length > 15) this.setState({ errorName: "Nombre demasiado largo." })
        else this.setState({ errorName: '', nameValidate: true })
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
    validateMatchPassword = () => {
        const password = this.state.password;
        const passwordConfirm = this.state.passwordConfirm;
        if (password !== passwordConfirm) this.setState({ errorPasswordConfirm: "Las contraseñas no coinciden." })
        else this.setState({ passwordConfirmValidate: true })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };
    render() {
        return (
            <form className="registerForm" onSubmit={this.handleSubmit}>
                <h1>Regístrate</h1>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Introduce tu nombre" />
                <div className="errorName"> {this.state.errorName} </div>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Introduce un Email válido" ref={this.emailInput} />
                <div className="errorEmail"> {this.state.errorEmail} </div>
                <input type="password" name="password" value={this.password} onChange={this.handleChange} placeholder="Crea una contraseña." />
                <div className="errorPassword"> {this.state.errorPassword} </div>
                <input type="password" name="passwordConfirm" value={this.passwordConfirm} onChange={this.handleChange} placeholder="Repita la contraseña." />
                <div className="errorPasswordConfirm"> {this.state.errorPasswordConfirm} </div>
                <button type="submit" disabled={this.state.validateForm}>Ok</button>
                <h4>si ya tienes cuenta <NavLink to="/login">Logueate</NavLink></h4>
            </form>
        )
    };
};

export default Register;