import React from "react";
import hero from '../../assets/hero.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/85 to-transparent sm:from-gray-800/85 sm:to-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            {/* Text with Shadow */}
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl shadow-lg">
              Your Finances
              <strong className="block font-extrabold text-rose-500">
                {" "}
                In One Place.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Manage all your finances in one place for a clear overview of
              spending, savings, and investments, empowering informed decisions
            </p>

            <div className="mt-8 flex justify-center sm:justify-center">
              <Link
                to={'/signup'}
                className="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
