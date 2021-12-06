import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.scss'
import Farms from "./components/farms/farms";
import Form from "./components/form/form";
import SelectToken from "./components/selectToken/selectToken";
import Confirm from "./components/confirm/confirm";
import Header from "./components/header/header";


const Root = () => {
    return (
        <>
           <BrowserRouter>
            <div>
                <Header/>
            </div>
               <Routes>
                   <Route exact path='/' element={ <Form/>}/>
                   <Route exact path='/farms' element={ <Farms/>}/>
                   <Route exact path='/confirm' element={ <Confirm/>}/>
                   <Route exact path='/selectToken' element={ <SelectToken/>}/>
               </Routes>
           </BrowserRouter>
        </>

    );
};

export default Root;