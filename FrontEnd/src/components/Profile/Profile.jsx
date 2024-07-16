import React, { useEffect, useLayoutEffect, useState } from "react";
import NavbarLogged from "../navbars/Navbar-logged";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserProfile } from "../../state/users/usersSlice";

const Profile = () => {
  const {currentUser, accessToken} = useSelector((store) => store.users)
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  useLayoutEffect(() => {
    if(accessToken)
      dispatch(getCurrentUserProfile(accessToken))
  }, [accessToken])

  return (
    <>
      <NavbarLogged />
      <div className="m-20 mt-10 border p-16 pt-8 pb-8 rounded-3xl">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Informations de l'utilisateur
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details.
          </p>
        </div>
        <div className="mt-3 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nom
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser?.currUser.nom}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Prenom
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser?.currUser.prenom}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser?.currUser.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Numero du Telephone
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser?.currUser.num}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Adresse
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser?.currUser.adresse}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Salaire
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser?.currUser.salaire}
              </dd>
            </div>
            <div className="flex justify-center items-end mt-5">
              <button
                onClick={handleModalOpen}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-2 rounded-xl flex items-center justify-center"
              >
                Modify
              </button>
            </div>
          </dl>
        </div>
      </div>

      {modalOpen && <ProfileModal currentUser={currentUser} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default Profile;
