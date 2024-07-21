import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { updateTransaction } from "../../state/transactions/transactionsSlice";

export default function EditModal({ onClose, transaction }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  const [data, setData] = useState({
    nomTransaction: transaction.nomTransaction || "",
    montantTransaction: transaction.montantTransaction || "",
    categorieId: transaction.categorieId || "",
    userId: transaction.userId || "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTransaction({ id: transaction.id, data }));
    onClose();
};

  return (
    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-red-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 mb-8"
                  >
                    Modifier cet élément ?
                  </DialogTitle>
                  <div className="mt-2">
                    <div className="border rounded-2xl mr-4 ml-6 p-6 mb-7 w-full">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                          <label
                            htmlFor="nomTransaction"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Transaction
                          </label>
                          <input
                            type="text"
                            id="nomTransaction"
                            name="nomTransaction"
                            value={data.nomTransaction}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="montantTransaction"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Montant
                          </label>
                          <input
                            type="text"
                            id="montantTransaction"
                            name="montantTransaction"
                            value={data.montantTransaction}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="categorieId"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Sélectionnez votre catégorie
                          </label>
                          <select
                            id="categorieId"
                            name="categorieId"
                            value={data.categorieId}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.nomCategorie}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 py-2.5 mb-2 mr-2"
                          >
                            Modifier
                          </button>
                          <button
                            type="button"
                            onClick={onClose}
                            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-6 py-2.5 mb-2 ml-2"
                          >
                            Annuler
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
