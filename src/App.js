import './App.css';
import Header from "./Components/Header/Header"
import Body from './Components/Body/Body';
import {createBrowserRouter,Outlet} from "react-router-dom";
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Body/> */}
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>
      },
    ]
  },
  
])

export default App;
