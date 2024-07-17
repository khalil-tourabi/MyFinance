import React, { Component, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import NavbarLogged from "../navbars/Navbar-logged";
import AddBudgetModal from "./AddModal";
import EditBudgetModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesSlice } from "../../state/categories/categoriesSlice";

const Budget = () => {
  const { categories, status } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesSlice());
  }, []);

  const [categorieID, setCategorieID] = useState(null)

  // modal stuff
  const [addBudgetModal, setAddBudgetModal] = useState(false);
  const [editBudgetModal, setEditBudgetModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleAddBudgleModal = () => {
    setAddBudgetModal(true);
  };

  const handleEditBudgetModal = (id) => {
    setCategorieID(id)
    setEditBudgetModal(true);
  };

  const handleDeleteModal = (id) => {
    setCategorieID(id)
    setDeleteModal(true);
  };

  return (
    <>
      {status === "loading" ? (
        <h1>Loading</h1>
      ) : (
        <>
          <NavbarLogged />
          <div className="p-14">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-8">
              Budget table
            </h2>

            <div className="flex justify-center flex-col items-center">
              <button
                onClick={handleAddBudgleModal}
                className="border bg-blue-600 text-white mb-5 p-2 rounded-xl flex justify-end"
              >
                Add Categorie
              </button>
              <Table className="w-full">
                <Table.Head>
                  <Table.HeadCell>Categorie</Table.HeadCell>
                  <Table.HeadCell>Budget</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {categories.map((categorie) => (
                    <Table.Row
                      key={categorie.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {categorie.nomCategorie}
                      </Table.Cell>
                      <Table.Cell>{categorie.budgetCategorie}</Table.Cell>
                      <Table.Cell>
                        <button
                          onClick={() => handleEditBudgetModal(categorie.id)}
                          className="border bg-green-600 text-white mr-3 rounded-xl p-2 px-5"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteModal(categorie.id)}
                          className="border bg-red-600 text-white p-2 rounded-xl"
                        >
                          Delete
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>

          {addBudgetModal && (
            <AddBudgetModal onClose={() => setAddBudgetModal(false)} />
          )}
          {editBudgetModal && (
            <EditBudgetModal onClose={() => setEditBudgetModal(false)} categorieId={categorieID} />
          )}
          {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} categorieId={categorieID} />}
        </>
      )}
    </>
  );
};

export default Budget;
