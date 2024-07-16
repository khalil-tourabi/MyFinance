import Budget from "./components/Budget/Budget";
import Profile from "./components/Profile/Profile";
import Accueil from "./components/Accueil/Accueil";
import CategorieInfo from "./components/Transaction per Categorie/CategorieInfo";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ErrorPage from "./components/Page not found/ErrorPage";
import TransactionPage from "./components/Transaction-Page/transaction";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* Private Routes */}
        <Route path='/transactions' element={<PrivateRoute Component={TransactionPage}/>} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
        <Route path="/categorie" element={<PrivateRoute Component={CategorieInfo} />} />
        <Route path="/budget" element={<PrivateRoute Component={Budget} />} />
        <Route path="/profile" element={<PrivateRoute Component={Profile} />} />
        {/* Catch-all Route for Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
