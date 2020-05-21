import "./Chrome.css";

import React from "react";
import Container from "../../atoms/Container";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

const Chrome = ({children}) => {
    const baseclass = "chrome";

    return (
        <Container className={baseclass}>
            <Header/>
            <section className={`${baseclass}__contents`}>
                {children}
            </section>
            <Footer/>
        </Container>
    );
};

export default Chrome;
