import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className="header-title">
                <div>Weather App</div>
            </div>

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