'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black bg-opacity-5 flex justify-center items-center p-4">
      <div className="hero bg-base-200 p-6 rounded-xl shadow-lg w-full max-w-5xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
            <p className="py-6 text-gray-300">
              Access your dashboard, manage your templates, and explore premium features.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset space-y-4">
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    Forgot password?
                  </Link>
                  <Link
                    href="/register"
                    className="underline text-primary font-medium hover:no-underline"
                  >
                    Register
                  </Link>
                </div>

                <button className="btn btn-neutral mt-4 w-full">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
