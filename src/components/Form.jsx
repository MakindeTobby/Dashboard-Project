import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Form = ({ email, setEmail, password, setPassword, handleLogin, checked, setChecked }) => {
    const [pwdVisible, setPwdVisible] = useState(false)

    return (
        <div className="md:p-12 md:mx-6">

            <form >
                <div className="flex justify-end mb-4"><select name="lang" className="border border-gray-300 rounded w-32 outline-none text-xs px-2 py-1">
                    <option value="" hidden>English (US)</option></select></div>
                <h4 className="text-xl mb-4 mt-1 pb-1 font-bold">Admin Login</h4>

                <p className="mb-4 text-gray-400">Login to your account</p>

                <div className="mb-3">
                    <label className="form-check-label inline-block mb-3 text-gray-800">Email Address</label>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=" focus:shadow-lg block w-full px-3 py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" placeholder="adminuser@email.com" />
                </div>

                <label className="form-check-label inline-block mb-3 text-gray-800">Password</label>
                <div className="mb-3 grid grid-cols-12 border border-solid  transition ease-in-out
                focus:shadow-lg border-gray-300 rounded  focus:border-blue-600 focus:border-2 ">

                    <input
                        type={pwdVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=" block  focus:shadow-lg w-full col-span-11 px-3  py-3 
                        text-sm font-normal text-gray-700 bg-white 
                        bg-clip-padding border-none outline-none  m-0
                         focus:text-gray-700 focus:bg-white focus:outline-none"
                        placeholder="Enter Password" />

                    <button onClick={() => setPwdVisible(!pwdVisible)} type='button'>
                        {pwdVisible ? <FaEye /> : <FaEyeSlash />}


                    </button>
                </div>





                <div className="text-center pt-1 mb-3 pb-1">

                    <div className="flex justify-between items-center mb-3">
                        <div className="form-group form-check">
                            <input type="checkbox"
                                onChange={() => { setChecked(true) }}
                                className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
                            <label className="form-check-label inline-block text-gray-800">Remember me</label>
                        </div>
                        <a href="#!" className="text-gray-800">Forgot password?</a>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="inline-block px-6 py-4 text-white font-medium  leading-tight rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Login
                    </button>
                    <div className="flex items-center gap-0 pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <NavLink to={'/register'} className="text-blue-700">Sign up</NavLink>
                    </div>


                </div>

            </form>
        </div>

    );
}

export default Form;