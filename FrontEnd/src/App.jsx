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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/categorie" element={<CategorieInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionPage />} />
      </Routes>
    </>
  );
}

export default App;
