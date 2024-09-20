import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function LoginForm({ onLoginSuccess }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://react-auth-t80o.onrender.com/api/login', data); //this is my API Implementation
            localStorage.setItem('token', response.data.token);
            onLoginSuccess();
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred during login');
        }
    };

    return (
        <div className="max-w-lg w-full bg-white p-10 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg">Username</label>
                    <input 
                        type="text" 
                        {...register("username", { required: "Username is required" })}
                        className="w-full p-3 border border-gray-300 rounded mt-2"
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-lg">Password</label>
                    <input 
                        type="password" 
                        {...register("password", { required: "Password is required" })}
                        className="w-full p-3 border border-gray-300 rounded mt-2"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-black text-white p-3 rounded-lg hover:bg-slate-900 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
