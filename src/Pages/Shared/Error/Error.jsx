import React from 'react';
import { Link } from 'react-router-dom';
import err from '../../../assets/404.svg'

const Error = () => {
    return (
      <section className="flex items-center h-screen p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            {/* <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2> */}
                    <div>
                        <img src={err} alt="" />
                    </div>
            <p className="text-2xl font-semibold md:text-3xl">
              Oh no, Where did you go?
            </p>
            <p className="mt-4 mb-8 text-gray-900">
              We can't seem to find the page you were looking for.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Error;