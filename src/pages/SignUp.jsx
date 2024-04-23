import { App } from '../layouts/App';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const handleFormSubmit = ( { email, password }) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                localStorage.setItem('access-token', userCredencial.user.accessToken);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Erro ao tentar criar um usuário:', errorCode, errorMessage)
            })
    };

    console.log(errors)

    return (
        <App>
            <div className='flex items-center justify-center w-screen h-screen flex-col'>
                <h1 className='font-sans text-center text-cyan-400'>Aluritter</h1>
                        <form className='flex flex-col w-full lg:w-1/4 md:w-1/3 sm:w-1/2 m-5' onSubmit={handleSubmit(handleFormSubmit)}>
                            <input className='w-full p-2 border border-gray-500 rounded' {...register('email', {
                                required: true,
                            })}
                            placeholder='digite seu e-mail' type='email'/>
                            {errors.email?.type === "required" ? (
                                <span className='text-red-600 text-xs'>É necessário preencher.</span>
                            ) : null}

                            <input className='w-full p-2 border border-gray-500 mt-5 rounded' {...register('password', {
                                required: true,
                                minLength: 6,
                            })}
                            placeholder='digite sua senha' type='senha'/>
                            {errors.password?.type === 'required' ? (
                                <span className='text-red-600 text-xs'>É necessário preencher.</span>
                            ) : null}
                            {errors.password?.type === 'minLength' ? (
                                <span className='text-red-600 text-xs'>Tamanho mínimo de 6 caracteres</span>
                            ) : null}

                            <button className='w-full bg-green-500 text-white mt-5 p-2 text-center rounded' type='submit'>Criar nova conta</button>
                        </form>

                        <div>
                            <span className='text-xs text-gray-700'>Já possui uma conta? <Link className='text-cyan-500 hover:underline' to='/sign-in'>Acesse agora!</Link></span>
                        </div>
            </div>
        </App>
    )
}