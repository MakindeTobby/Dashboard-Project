import { useState } from 'react'
import axios from "axios";
import Form from '../../components/Form';


const Login = () => {

    const [email, setEmail] = useState('ayobamideleadepoju@gmail.com');
    const [password, setPassword] = useState('Damochi-1992');
    const [checked, setChecked] = useState(false)
    const user = {
        email, password, rememberMe: checked
    }
    const handleLogin = async () => {
        try {
            const { data } = await axios.post('http://profitmax-001-site7.ctempurl.com/api/Account/auth', user)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <section className="h-[100vh] gradient-form bg-slate-200 md:h-screen">
            <div>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                                pink Color
                            </a>
                            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                <span className="block relative w-6 h-px rounded-sm bg-white" />
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1" />
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1" />
                            </button>
                        </div>
                        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                                        </i></a><i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                                    </i></li><i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                                    <li className="nav-item">
                                        <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75">
                                            </i></a><i className="fab fa-twitter text-lg leading-lg text-white opacity-75">
                                        </i></li><i className="fab fa-twitter text-lg leading-lg text-white opacity-75">
                                        <li className="nav-item">
                                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                                <i className="fab fa-instagram text-lg leading-lg text-white opacity-75">
                                                </i></a><i className="fab fa-instagram text-lg leading-lg text-white opacity-75">
                                            </i></li><i className="fab fa-instagram text-lg leading-lg text-white opacity-75">
                                            <li className="nav-item">
                                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                                    <i className="fab fa-github text-lg leading-lg text-white opacity-75">
                                                    </i></a><i className="fab fa-github text-lg leading-lg text-white opacity-75">
                                                </i></li><i className="fab fa-github text-lg leading-lg text-white opacity-75">
                                            </i></i></i></i></ul><i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"><i className="fab fa-twitter text-lg leading-lg text-white opacity-75"><i className="fab fa-instagram text-lg leading-lg text-white opacity-75"><i className="fab fa-github text-lg leading-lg text-white opacity-75">
                                            </i></i></i></i></div><i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"><i className="fab fa-twitter text-lg leading-lg text-white opacity-75"><i className="fab fa-instagram text-lg leading-lg text-white opacity-75"><i className="fab fa-github text-lg leading-lg text-white opacity-75">
                                            </i></i></i></i></div><i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"><i className="fab fa-twitter text-lg leading-lg text-white opacity-75"><i className="fab fa-instagram text-lg leading-lg text-white opacity-75"><i className="fab fa-github text-lg leading-lg text-white opacity-75">
                                            </i></i></i></i>
                </nav>
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"><i className="fab fa-twitter text-lg leading-lg text-white opacity-75"><i className="fab fa-instagram text-lg leading-lg text-white opacity-75"><i className="fab fa-github text-lg leading-lg text-white opacity-75">
                </i></i></i></i>
            </div>

            <div className="w-full py-14 px-0">

                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-[70%] md:w-[80%] sm:w-[100%]" >
                        <div className="block bg-white">

                            <div className="lg:flex lg:flex-wrap g-0">

                                <div className="lg:w-6/12 flex items-center bg-[#F1F0FF] sm:bg-none">
                                    <div className="flex w-full justify-center px-4 py-6 md:p-12 md:mx-6">
                                        <img src="/images/promax_logo 1.png" alt="" width={'50%'} />

                                    </div>
                                </div>

                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <br />
                                    <br />


                                    <Form
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        checked={checked}
                                        setChecked={setChecked}
                                        handleLogin={handleLogin} />
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Login;