import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Main = () => {
    return (
        <div>
            <HeaderMenu></HeaderMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
