import logo from "./assets/img/logo.svg";
import "./styles/style.scss"; 

//Components
import {Options} from "./components/Options";
import {Navigation} from "./components/Navigation";
import {List} from "./components/Card_list";


function App() {
  return (
    <>
      <div className="container">
        <div className="header d-flex justify-content-center">
          <img src={logo} alt="" />
        </div>
        <div className="row gx-0 gx-md-5">
          <Options />
          <div className="col-md-9 main">
            <Navigation />
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
