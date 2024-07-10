import React, { Component } from "react";
import family from '../../assets/happy-family.png'
import laugh from '../../assets/laugh.jpg'

const RicherLife = () => {
  return (
    <>
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-12">
        Leading Richer Life
      </h2>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mb-3">
        <img
          alt=""
          src={laugh}
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Our mission at Budgetbakers is to help <span className="text-green-500">you lead a richer life.</span> 
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Building a picture of all your assets, monitoring your money and
              controlling your spending has one purpose, and one purpose only:
              to lead to a richer life.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mb-32">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            A rich life isn’t just about money. <span className="text-green-500">It’s about how you use it. </span>
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
            "A rich life transcends mere wealth; it's defined by how wisely one wields it."
            </p>
          </div>
        </div>

        <img
          alt=""
          src={family}
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </>
  );
};

export default RicherLife;
