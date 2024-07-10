import React from "react";
import NavbarLogged from "../navbars/Navbar-logged";

const TransactionPage = () => {
  return (
    <>
      <NavbarLogged />
      <div className="container mx-auto max-w-7xl p-4 mt-10 flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
          {/* left Side container */}
          <div className="leftSide w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <div className="month-salaire mb-4 flex justify-between">
              <div className="bg-blue-100 border border-blue-300 text-slate-500 rounded-lg p-1 shadow-md text-center">
                <p className="text-lg font-semibold">Month</p>
              </div>

              <div className="bg-blue-100 border border-blue-600 text-slate-500 rounded-lg p-1 shadow-md text-center">
                <p className="text-lg font-semibold">
                  Salaire: <span className="font-normal">4599</span>
                </p>
              </div>
            </div>
            {/* divider */}
            <div className="flex items-center mb-4">
              <div className="pr-6">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-blue-600">
                  Transactions
                </span>
              </div>
              <span className="h-px flex-1 bg-black"></span>
            </div>
            {/* cards */}
            <div className="cards">
              <article className="mb-2 hover:animate-pulse rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-opacity-50 hover:shadow-sm">
                <div className="rounded-lg bg-white p-4 sm:p-6 flex justify-between">
                  <div className="card-leftSide">
                    <time className="block text-xs text-gray-500">
                      10th Oct 2022
                    </time>
                    <a href="#">
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Ach dert b dik flous
                      </h3>
                    </a>
                    <div className="mt-4 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Louasirs
                      </span>
                    </div>
                  </div>
                  <div className="card-rightSide">
                    <div className="card-prix">Montant: 200 DH</div>
                  </div>
                </div>
              </article>
              <article className="mb-2 hover:animate-pulse rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-opacity-50 hover:shadow-sm">
                <div className="rounded-lg bg-white p-4 sm:p-6 flex justify-between">
                  <div className="card-leftSide">
                    <time className="block text-xs text-gray-500">
                      10th Oct 2022
                    </time>
                    <a href="#">
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Ach dert b dik flous
                      </h3>
                    </a>
                    <div className="mt-4 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Louasirs
                      </span>
                    </div>
                  </div>
                  <div className="card-rightSide">
                    <div className="card-prix">Montant: 200 DH</div>
                  </div>
                </div>
              </article>
              <article className="mb-2 hover:animate-pulse rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-opacity-50 hover:shadow-sm">
                <div className="rounded-lg bg-white p-4 sm:p-6 flex justify-between">
                  <div className="card-leftSide">
                    <time className="block text-xs text-gray-500">
                      10th Oct 2022
                    </time>
                    <a href="#">
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Ach dert b dik flous
                      </h3>
                    </a>
                    <div className="mt-4 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Louasirs
                      </span>
                    </div>
                  </div>
                  <div className="card-rightSide">
                    <div className="card-prix">Montant: 200 DH</div>
                  </div>
                </div>
              </article>
              <article className="mb-2 hover:animate-pulse rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-opacity-50 hover:shadow-sm">
                <div className="rounded-lg bg-white p-4 sm:p-6 flex justify-between">
                  <div className="card-leftSide">
                    <time className="block text-xs text-gray-500">
                      10th Oct 2022
                    </time>
                    <a href="#">
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Ach dert b dik flous
                      </h3>
                    </a>
                    <div className="mt-4 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Louasirs
                      </span>
                    </div>
                  </div>
                  <div className="card-rightSide">
                    <div className="card-prix">Montant: 200 DH</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {/* right side container */}
          <div className="transactionForm w-full md:w-1/2 pl-4">
            <h2 className="text-xl font-semibold text-blue-600 sm:text-4xl mb-10">
              nouvelle transaction
            </h2>
            {/* transaction input form */}
            <div className="border rounded-2xl mr-4 p-6">
              <form>
                <div className="mb-5">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Transaction
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Montant
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                {/* DropDown List */}
                <label
                  htmlFor="categories"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select your category
                </label>
                <select
                  id="categories"
                  className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Utilities</option>
                  <option>Louasirs</option>
                </select>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-16 py-2.5 me-2 mb-2"
                  >
                    Ajouter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
