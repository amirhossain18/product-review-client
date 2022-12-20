import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Main = () => {
    return (
        <div>
            <HeaderMenu></HeaderMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
