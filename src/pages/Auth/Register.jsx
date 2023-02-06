import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Autophone from "../../components/AutoPhone";
import Phone from "../../components/Phone";

const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/admin-auth')
        toast.success('wow this works')
    }
    return (
        <div className="w-full h-auto mx-auto lg:p-4 md:p-4 sm:p-0 bg-slate-200">
            <NavLink to={'/login'} className="flex w-full justify-center mb-2">
                <img src="/images/promax_logo 1.png" alt="" width={'10%'} />

            </NavLink>
            <div className="mx-auto max-w-lg">
                <div className="bg-white rounded ">
                    <div className="border-b py-6 text-black text-center flex flex-col gap-2">
                        <small className=" font-bold text-xl">CREATE YOUR ACCOUNT</small>
                        <small >Set up your new account to get started</small>
                    </div>
                    <form className="bg-grey-lightest px-10 py-8">
                        <div className="relative mb-4">
                            <input type="text" id="floating_outlined"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                Company Name</label>
                        </div>
                        <div className="relative mb-4">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                Company Email</label>
                        </div>
                        <div className="relative mb-4">
                            <Phone />
                            {/* <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone Number</label>
                         */}
                        </div>

                        <div className="relative mb-4">
                            <input type="text" id="floating_outlined"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                Company Address</label>
                        </div>
                        {/* <Autophone /> */}

                        <div className="relative mb-4">
                            {/* <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Package</label> */}
                            <select id="large" className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option defaultValue={1} hidden>Choose a package</option>
                                <option value="US">Basic</option>
                                <option value="CA">Premium</option>
                                <option value="FR">Proffesional</option>
                            </select>
                            {/* I consent to the collection and processing of my personal data in line with data regulations as described in our Privacy Policy */}
                        </div>
                        {/* <div>
                            
                        </div> */}
                        <div className="flex items-start mb-4">
                            <input defaultChecked type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-checked-checkbox" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                                I consent to the collection and processing of my personal data in line with data regulations as described in our Privacy Policy</label>
                        </div>

                        <div className="flex">
                            <button type="button"
                                onClick={handleSubmit}
                                className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded  px-5 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Proceed</button>
                        </div>
                    </form>
                    <div className="border-t px-10 py-4">
                        <div className="flex gap-2">
                            <span>Already have an account ?</span>
                            <NavLink to={'/login'} className="font-bold text-blue-500 hover:text-blue-700 no-underline">Sign in here</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;