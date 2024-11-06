import React from 'react';
import Image from 'next/image';

const SignUpPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <img src="/images/loginbanner.png" alt="Login banner" className="max-w-full p-14 h-auto" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4">Create an account</h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                className="appearance-none border-b-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">

              <input
                type="text"
                id="email"
                className="appearance-none border-b-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email or phone number"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="appearance-none border-b-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold w-80 py-2 rounded focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
              <a
                href="#"
                className="flex justify-center items-center gap-3 border-2 w-80 py-1 rounded-md align-baseline font-bold text-sm"
              >
               <Image src="/images/Icon-Google.png" width={26} height={18} alt="Google" className="h-10 transition-all aspect-square duration-300 hover:brightness-110" />
                <p className=''>Sign up with Google</p>
              </a>
            </div>
            <div className="text-center flex justify-center items-center gap-2 mt-4">
              <p>Already have an account?</p>  
              <a href="../login" className="hover:underline">
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
