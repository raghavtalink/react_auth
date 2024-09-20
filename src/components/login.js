import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

/**
 * Form component for user login
 * 
 * @prop {function} onLoginSuccess - function to be called when login is successful
 * 
 * @returns {React.ReactElement} - JSX for the login form
 */
function LoginForm({ onLoginSuccess }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    /**
     * Handles form submission
     * 
     * @param {object} data - form data
     * 
     * @returns {Promise<void>} - resolves when request is finished
     */
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://react-auth-t80o.onrender.com/api/login', data); //this is my API Implementation
            localStorage.setItem('token', response.data.token);
            onLoginSuccess();
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred during login');
        }
    };

    // render the login form
    return (
        <div className="max-w-lg w-full bg-white p-10 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    {/* username field */}
                    <label className="block text-gray-700 text-lg">Username</label>
                    <input 
                        type="text" 
                        {...register("username", { required: "Username is required" })}
                        className="w-full p-3 border border-gray-300 rounded mt-2"
                    />
                    {/* show error message if username is invalid */}
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>

                <div className="mb-6">
                    {/* password field */}
                    <label className="block text-gray-700 text-lg">Password</label>
                    <input 
                        type="password" 
                        {...register("password", { required: "Password is required" })}
                        className="w-full p-3 border border-gray-300 rounded mt-2"
                    />
                    {/* show error message if password is invalid */}
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* submit button */}
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

