import React, { useState } from "react";
import NavbarLogged from "../navbars/Navbar-logged";
import Modal from "./DeleteModal";
import EditModal from "./EditModal";

const CategorieInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <NavbarLogged />
      <div className="container mx-auto max-w-screen-xl p-4 mt-10">
        <h2 className="text-xl font-semibold text-blue-700 sm:text-4xl mb-10">
          Categorie: Utilities
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Montant
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <button
                    onClick={handleEditModal}
                    className="font-medium text-white dark:text-blue-500 hover:underline mr-2 border bg-green-500 pl-3 pr-3 p-1.5 rounded-lg sm:pl-4 sm:pr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleEditClick}
                    className="font-medium text-white dark:text-red-500 hover:underline border bg-red-500 p-1 pl-2 pr-2 rounded-lg sm:p-1.5 sm:pl-2.5 sm:pr-2.5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {editModal && <EditModal onClose={() => setEditModal(false)} />}
    </>
  );
};

export default CategorieInfo;
