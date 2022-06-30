import React from "react";
import { Link } from 'react-router-dom';

export default function PageErrorMessage({
    title= "404 NOT FOUND",
    body= "Looks Like This Page Not Found"
}) {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h1 className="text-3xl font-semibold mb-6">
              {title}
            </h1>
            <p className="text-lg mb-12">
              {body}
            </p>
            <Link
              to="/"
              className="text-gray-900 bg-green-300 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer hover:bg-green-400"
            >
              Back to HomePage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
