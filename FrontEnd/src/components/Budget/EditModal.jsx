import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
  } from "@headlessui/react";
  import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
  
  export default function EditBudgetModal({ categorieId, onClose }) {
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
                      Editer Categorie: 
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="border rounded-2xl mr-4 ml-6 p-6 mb-7 w-full">
                        <form>
                          <div className="mb-5">
                            <label
                              htmlFor="base-input"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Nom de Categorie:
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
                              Budget:
                            </label>
                            <input
                              type="number"
                              id="base-input"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                          </div>
                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 py-2.5 mb-2 mr-2" // Adjusted padding and margin
                            >
                              Ajouter
                            </button>
                            <button
                              type="button"
                              onClick={onClose}
                              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-6 py-2.5 mb-2 ml-2" // Adjusted padding and margin
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
  