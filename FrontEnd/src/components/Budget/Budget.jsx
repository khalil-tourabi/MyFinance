import React, { Component, useState } from "react";
import { Table } from "flowbite-react";
import NavbarLogged from "../navbars/Navbar-logged";
import AddBudgetModal from "./AddModal";
import EditBudgetModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const Budget = () => {
  const [addBudgetModal, setAddBudgetModal] = useState(false);
  const [editBudgetModal, setEditBudgetModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleAddBudgleModal = () => {
    setAddBudgetModal(true);
  };

  const handleEditBudgetModal = () => {
    setEditBudgetModal(true);
  };

  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  return (
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
              {/* <Table.HeadCell>Color</Table.HeadCell> */}
              {/* <Table.HeadCell>Category</Table.HeadCell> */}
              <Table.HeadCell>Budget</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                {/* <Table.Cell>Sliver</Table.Cell> */}
                {/* <Table.Cell>Laptop</Table.Cell> */}
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={handleEditBudgetModal}
                    className="border bg-green-600 text-white mr-3 rounded-xl p-2 px-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDeleteModal}
                    className="border bg-red-600 text-white p-2 rounded-xl"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>

      {addBudgetModal && (
        <AddBudgetModal onClose={() => setAddBudgetModal(false)} />
      )}
      {editBudgetModal && (
        <EditBudgetModal onClose={() => setEditBudgetModal(false)} />
      )}
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} />}
    </>
  );
};

export default Budget;
