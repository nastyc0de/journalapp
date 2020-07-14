// importar de react
import React from 'react';
// importar redux
import { useDispatch, useSelector } from 'react-redux';
// importar de react router dom
import { Link } from 'react-router-dom';
// importar los actions
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
// importar los hooks
import { useForm } from '../../hooks/useForm';
// importar otros paquetes
import validator from 'validator';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [state, handleInputChange]=useForm({
        name: 'Andres',
        email:'plague@outlook.es',
        password:'123456',
        password2:'123456'
    });

    const {name, email, password, password2} = state;
    
    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
    }
    const isFormValid = () =>{
            if (name.trim().length === 0) {
                dispatch(setError('nombre es requerido'));
                return false;
            }else if(!validator.isEmail(email)){
                dispatch(setError('email no es valido'));
                return false;
            }else if( password !== password2 ){
                dispatch(setError('El password debe de coincidir'));
                return false;
            }else if(password.length <= 5){
                dispatch(setError('El password debe de ser de al menos de 6 caracteres'));
                return false;
            }
            dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className='auth__title'>Registrar</h3>
           
            <form onSubmit={handleRegister}>
            {
                msgError 
                &&
                (<div className="auth__alert-error">
                    {msgError}
                </div>)
            }    
            <input 
                    type="text"
                    placeholder=' Nombre:'
                    name='name'
                    className='auth__input'
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    placeholder=' Email:'
                    name='email'
                    className='auth__input'
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder=' Password:'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder=' Confirmar:'
                    name='password2'
                    className='auth__input'
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                >
                    Guardar
                </button>

                <Link to='/auth/login' className='link'>
                    Ya estas registrado?
                </Link>
            </form>
        </>
    )
}
