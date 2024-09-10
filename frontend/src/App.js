import { StoreContext } from "./context/context";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
import { useContext, } from "react";

function App() {

 const{isregister,setIsRegister} = useContext(StoreContext);


  return (
    <div className="App">
      {isregister ? <Register /> : <LogIn />}
    </div>
  );
}

export default App;
