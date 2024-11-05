import { Button } from '@/components/ui/button';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <img src="/images/loginbanner.png" alt="Login banner" className="max-w-full h-auto" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4 pb-4">Log in to Exclusive</h1>
          <p className="font-semibold mb-4 pb-4">Enter your details below</p>
          <form>
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
            <div className="flex items-center justify-between">
              <Button className="bg-red-500 w-24">Log In</Button>
              <a href="/signup" className="text-red-500 hover:underline">
                Forget Password?
              </a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
