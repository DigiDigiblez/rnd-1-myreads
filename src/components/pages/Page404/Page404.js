import "./Page404.css";

import React from "react";
import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";

const Page404 = () => {
    const baseclass = "page404";

    return (
        <Container className={baseclass}>
            <Chrome>
                404 page not found!
            </Chrome>
        </Container>
    );
};

export default Page404;
