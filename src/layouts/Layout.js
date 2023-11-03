import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";

const Layout = () => {
    return (
        <div>
            <HeaderTitle/>

            <Container className="home-container">
                <Outlet />
            </Container>

            <footer className="footer">
                <p> 
                    2023 Fidenz Technologies
                </p>
            </footer>
        </div>
    )
}

export default Layout;