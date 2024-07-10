import React from "react";
import { FaUser, FaCommentDollar, FaStar } from "react-icons/fa";

const Stats = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by our Users
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border border-gray-100 px-4 py-8">
              <FaCommentDollar className="text-5xl text-gray-900 mb-3 mx-auto" style={{color: '#00c187'}} />
              <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                + $1.1m
              </dd>
              <dt className="text-lg font-medium text-gray-500">
                Total Money Saved
              </dt>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-gray-100 px-4 py-8">
              <FaUser className="text-5xl text-gray-900 mb-3 mx-auto" style={{color: '#00c187'}} />
              <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                + 600000
              </dd>
              <dt className="text-lg font-medium text-gray-500">
                Monthly Users
              </dt>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-gray-100 px-4 py-8">
              <FaStar className="text-5xl text-gray-900 mb-3 mx-auto" style={{color: '#00c187'}} />
              <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                4.7
              </dd>
              <dt className="text-lg font-medium text-gray-500">
                Rating
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
