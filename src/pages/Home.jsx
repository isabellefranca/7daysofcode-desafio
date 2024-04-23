import { App } from '../layouts/App.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [post, setPost] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('publicando novo post...')
    }

    const handlePost = (e) => {
        const postValue = e.target.value;
        setPost(postValue);
    }

    const handleLogOut = () => {
        localStorage.removeItem('access-token');
        navigate('/sign-in');
    }

    return (
        <App>
            <div className='bg-gray-200 w-screen h-screen'>
                <header className='flex bg-white items-center justify-between p-4 shadow-sm'>
                    <div>
                        <span className='font-sans text-cyan-400 font-semibold'>aluritter</span>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <span>xxx@xxx.xxx</span>
                        <button onClick={handleLogOut} className='bg-red-500 border-none rounded text-white p-1 text-center w-12'>sair</button>
                    </div>
                </header>

                <div className='flex flex-col'>
                    <section className='flex my-8 mx-40 flex-col p-8'>
                        <h2 className='text-gray-500'>Aluritte agora mesmo...</h2>

                        <form className='flex w-full mt-5' onSubmit={handleFormSubmit}>
                            <textarea rows="3" maxLength={255} className='border rounded w-full text-gray-500 p-5 my-2' value={post} onChange={handlePost}/>
                        </form>

                        <div className='mt-5 flex justify-between'>
                            {post.length < 255 ? (
                                <span className='text-green-500 font-semibold'>Você ainda pode digitar 255 caracteres</span>

                            ) : (
                                <span className='text-red-500 font-semibold'>Você excedeu o limite de caracteres</span>
                            )}

                            <button type='submit' className='bg-cyan-400 text-white rounded p-1'>aluritar</button>
                        </div>
                    </section>

                    <section className='flex mx-40 flex-col p-8'>
                        <div className='bg-white w-full p-4 rounded'>
                            <span className='text-sans text-gray-500'>Glinda e Elphaba cantando For Good</span>
                            <div className='flex justify-between mt-6'>
                                <span className='text-sans text-cyan-500'>xxx@xxx.xxx</span>
                                <span className='text-sans text-gray-500 text-sm'>xx/xx/xxxx</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </App>
    )
};
