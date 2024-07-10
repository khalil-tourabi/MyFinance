import Accueil from "./components/Accueil/Accueil";
import Login from "./components/Login/Login";
import NavbarUnlogged from "./components/navbars/Navbar-unlogged";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Register />
      <NavbarUnlogged />
      <Login />
    </>
  );
}

export default App;
