import React from 'react'
import { Link } from 'react-router-dom'

// UI FOR LOGIN PAGE

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
            backdrop-blur-lg bg-opacity-0'>
            <h1 className="text-3xl font-semibold text-center text-pink-100">
                Login to <span className="text-pink-300">NyanChat</span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text text-white'>Username:</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='input input-ghost input-secondary h-10 w-full focus:bg-transparent text-white placeholder-gray-300' />
                </div>

                <div>
                    <label className="label p-2">
                        <span className='text-base label-text text-white'>Password:</span>
                    </label>
                    <input type='password' placeholder='Enter Password'
                    className='input input-ghost input-secondary h-10 w-full focus:bg-transparent focus:text-white text-white placeholder-gray-300'
                    />
                </div>
                <div>
                    <button className='btn btn-block btn-sm bg-pink-500 text-white border-none hover:bg-pink-700  mt-4 '>Login</button>
                </div>
                <Link to='/signup' className="text-sm hover:underline text-pink-100 hover:text-pink-600 mt-2 inline-block">{"Don't"} have an account?</Link>
            </form>
                
            </div>
            
        </div>
    )
}

export default Login


// STARTER CODE
// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//             backdrop-blur-lg bg-opacity-0'>
//             <h1 className="text-3xl font-semibold text-center text-gray-300">
//                 Login to <span className="text-pink-500">NyanChat</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Username:</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Password:</span>
//                     </label>
//                     <input type='password' placeholder='Enter Password'
//                     className='w-full input input-bordered h-10' 
//                     />
//                 </div>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>Login</button>
//                 </div>
//                 <a href="#" className="text-sm hover:underline hover:text-pink-600 mt-2 inline-block">{"Don't"} have an account?</a>
//             </form>
                
//             </div>
            
//         </div>
//     )
// }

// export default Login