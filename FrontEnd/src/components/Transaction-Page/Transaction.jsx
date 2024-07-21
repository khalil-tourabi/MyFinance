import React, { useEffect, useState } from "react";
import NavbarLogged from "../navbars/Navbar-logged";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserProfile } from "../../state/users/usersSlice";
import { getCategoriesSlice } from "../../state/categories/categoriesSlice";
import {
  addTransactionSlice,
  getTransactionsSlice,
} from "../../state/transactions/transactionsSlice";

const TransactionPage = () => {
  const { accessToken, currentUser, status } = useSelector(
    (store) => store.users
  );
  const { categories } = useSelector((store) => store.categories);
  const { transactions } = useSelector(
    (store) => store.transactions.transactions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) dispatch(getCurrentUserProfile(accessToken));

    dispatch(getCategoriesSlice());
    dispatch(getTransactionsSlice());
  }, [accessToken]);

  const [newTransaction, setNewTransaction] = useState({
    nomTransaction: "",
    montantTransaction: "",
    categorieId: "",
    userId: currentUser?.currUser?.id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !newTransaction.nomTransaction ||
        !newTransaction.montantTransaction ||
        !newTransaction.categorieId ||
        !newTransaction.userId
      ) {
        alert("You forgot something please check again!");
        return;
      }

      // Ensure to use the latest state values for newTransaction
      const transactionToAdd = {
        nomTransaction: newTransaction.nomTransaction,
        montantTransaction: newTransaction.montantTransaction,
        categorieId: newTransaction.categorieId,
        userId: newTransaction.userId,
      };

      await dispatch(addTransactionSlice(transactionToAdd)).unwrap();
      setNewTransaction({
        nomTransaction: "",
        montantTransaction: "",
        categorieId: "",
        userId: currentUser?.currUser?.id || "",
      });
      // Optionally, fetch transactions again after adding a new one
      dispatch(getTransactionsSlice());
    } catch (error) {
      console.log("Error occurred while creating new transaction!", error);
      throw error;
    }
  };

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  // Current Date
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  return (
    <>
      {status === "loading" ? (
        <h1>Loading</h1>
      ) : (
        <>
          <NavbarLogged />
          <div className="container mx-auto max-w-7xl p-4 mt-10 flex justify-center">
            <div className="flex flex-wrap justify-center w-full">
              {/* left Side container */}
              <div className="leftSide w-full md:w-1/2 pr-4 mb-4 md:mb-0">
                <div className="month-salaire mb-4 flex justify-between">
                  <div className="bg-blue-100 border border-blue-300 text-slate-500 rounded-lg p-1 shadow-md text-center">
                    <p className="text-lg font-semibold">{currentMonth}</p>
                  </div>

                  <div className="bg-blue-100 border border-blue-600 text-slate-500 rounded-lg p-1 shadow-md text-center">
                    <p className="text-lg font-semibold">
                      Salaire:{" "}
                      <span className="font-normal">
                        {currentUser.currUser?.salaire}
                      </span>
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
                  {transactions && transactions.length > 0 ? (
                    [...transactions].reverse().map((transaction) => {
                      const category = categories.find(
                        (cat) => cat.id === transaction.categorieId
                      );

                      return (
                        <article
                          key={transaction.id}
                          className="mb-2 hover:animate-pulse rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-opacity-50 hover:shadow-sm"
                        >
                          <div className="rounded-lg bg-white p-4 sm:p-6 flex justify-between">
                            <div className="card-leftSide">
                              <time className="block text-xs text-gray-500">
                                {transaction.dateTransaction}
                              </time>
                              <a href="#">
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                  {transaction.nomTransaction}
                                </h3>
                              </a>
                              <div className="mt-4 flex flex-wrap gap-1">
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                  {category
                                    ? category.nomCategorie
                                    : "Unknown Category"}
                                </span>
                              </div>
                            </div>
                            <div className="card-rightSide">
                              <div className="card-prix">
                                <span>Montant: </span>{transaction.montantTransaction}
                              </div>
                              <div className="mt-8">
                                <span>Budget: </span>{category ? category.budgetCategorie : 'Unknown budget'}
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })
                  ) : (
                    <p>No transactions available.</p>
                  )}
                </div>
              </div>
              {/* right side container */}
              <div className="transactionForm w-full md:w-1/2 pl-4">
                <h2 className="text-xl font-semibold text-blue-600 sm:text-4xl mb-10">
                  nouvelle transaction
                </h2>
                {/* transaction input form */}
                <div className="border rounded-2xl mr-4 p-6">
                  <form onSubmit={handleSubmit}>
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
                        name="nomTransaction"
                        value={newTransaction.nomTransaction}
                        onChange={handleChange}
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
                        name="montantTransaction"
                        value={newTransaction.montantTransaction}
                        onChange={handleChange}
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
                      name="categorieId"
                      value={newTransaction.categorieId}
                      onChange={handleChange}
                      className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.nomCategorie}
                        </option>
                      ))}
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
      )}
    </>
  );
};

export default TransactionPage;
