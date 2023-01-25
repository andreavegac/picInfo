import React, { useState } from "react";
import './Login.css';
import Title from './Title';
import Label from './Label';
import Input from './Input';
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange(name, value){
        if(name === "usuario"){
            setUser(value)
        }
        else{
            if(value.length < 5){
                setPasswordError(true)
            }
            else{
                setPasswordError(false)
                setPassword(value)
            }
            
        }
    }

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'ADMINISTRADOR' && param.password === '123456'){
                const {user, password} = param
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }
            else{
                setIsLogin(false);
                setHasError(true);
            }
        }
        else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account = {user, password}
        if(account){
            ifMatch(account)
            console.log('account:', account)
        }
    }

    return (
        <div className="login-container">
            <Title text = 'TITULO PRINCIPAL'/>
            { hasError &&
                <label className="laber-alert">
                    Datos incorrectos
                </label>
            }
            <Label text= 'USUARIO'/>
            <Input
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                planceholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text= 'CONTRASEÑA'/>
            <Input
            attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                planceholder: 'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param = {passwordError}
            />
            {passwordError &&
                <label className="label-error">
                    Contraseña invalida o incompleta
                </label>
            }
            <button onClick={handleSubmit}>
                 INGRESAR
            </button>
        </div>
    )
};

export default Login;