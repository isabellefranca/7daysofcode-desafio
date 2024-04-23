import { App } from "../layouts/App";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const handleFormSubmit = ({ email, password }) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                localStorage.setItem('access-token', userCredencial.user.accessToken);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
    };



    return(
        <App>
            <div className="flex items-center justify-center w-screen h-screen flex-col">
                <h1 className="font-sans text-center text-cyan-400">Aluritter</h1>
                <form className="flex flex-col w-full lg:w-1/4 m-5" onSubmit={handleSubmit(handleFormSubmit)}>
                    <input className="w-full p-2 border border-gray-500 rounded" {...register('email', {
                        required: true,
                    })} placeholder="digite seu e-mail" type="email" />
                    {errors.email?.type === 'required' ? (
                        <span className="text-red-600 text-xs">
                            É necessário preencher.
                        </span>
                    ) : null}
                    <input className="w-full p-2 border border-gray-500 mt-5 rounded" {...register('password', {
                        required: true,
                        minLength: 6,
                    })} placeholder="digite sua senha" type="senha" />
                    {errors.password?.type === 'required' ? (
                        <span className="text-red-600 text-xs">
                            É necessário preencher.
                        </span>
                    ) : null}
                    {errors.password?.type === 'minLength' ? (
                        <span className="text-red-600 text-xs">
                            Tamanho mínimo de 6 caracteres.
                        </span>
                    ) : null}
                    <button className="w-full bg-green-500 text-white mt-5 p-2 text-center rounded">
                        Acessar plataforma
                    </button>
                </form>

                <div>
                    <span className="text-xs text-gray-700">Não possui uma conta? <Link className="text-cyan-500 hover:underline" to='/sign-up'>Crie agora!</Link></span>
                </div>
            </div>
        </App>
    )
}