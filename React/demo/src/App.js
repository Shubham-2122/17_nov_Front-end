import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import Not from "./Layout/Pages/Not";
import Life from "./LifeCycle/Life";
import Ref from "./Hooks/Ref";
// import BookData from "./Design/BookData";
// import ReacCard from "./Design/ReacCard";
// import MDdata from "./Design/MDdata";
// import Logindata from "./Design/Logindata";
// import Hello from "./Jsx/Hello";
// import Cssdata from "./Css/Cssdata";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import FormData from "./Form_hadling/FormData";
// import FormObj from "./Form_hadling/FormObj";
// import UseDate from "./useEffect/UseDate";
// import UsersData from "./useEffect/UsersData";
// import UserAxios from "./useEffect/UserAxios";
// import ProductData from "./useEffect/ProductData";
// import MainContext from "./context/MainContext";
// import FuncCompo from "./Component/FuncCompo";
// import ClassCompo from "./Component/ClassCompo";

function App() {
    return (
        <BrowserRouter>

            <div>
                {/* <h1>Hello this App file</h1> */}

                {/* Compoenent */}
                {/* <ClassCompo /> */}
                {/* <FuncCompo /> */}
                {/* <FuncCompo /> */}

                {/* jsx component */}
                {/* <Hello /> */}

                {/* css */}
                {/* <Cssdata /> */}

                {/* Porps data */}
                {/* <MainProps /> */}


                {/* <State  */}
                {/* <MainState /> */}

                {/* form handling */}
                {/* <FormData /> */}
                {/* <FormObj /> */}

                {/* api data show */}
                {/* <UseDate /> */}
                {/* <UsersData /> */}
                {/* <UserAxios /> */}
                {/* <ProductData /> */}


                {/* Context */}
                {/* <MainContext /> */}

                {/* design data */}
                {/* <BookData /> */}
                {/* <ReacCard /> */}
                {/* <Logindata /> */}
                {/* <MDdata /> */}

                <Routes>
                    {/* validate page */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} >
                        <Route path="about1" element={<About1 />} />
                        <Route path="about2" element={<About2 />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/life" element={<Life />} />
                    <Route path="/ref" element={<Ref />} />


                    {/* 404 not Found page */}
                    <Route path="*" element={<Not />} />
                    
                </Routes>

            </div>
        </BrowserRouter>
    )
}
export default App;
