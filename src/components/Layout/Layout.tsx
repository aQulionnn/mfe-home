import React from 'react';
import Header from "../Header/Header.tsx";

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <div className="layout">
            <Header />
            { children }
        </div>
    )
}

export default Layout;