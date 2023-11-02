import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>            
            <div>
                <h1>Weather App</h1>
            </div>

            <Container className="px-5">
                <Outlet/>
            </Container>

            <footer className="bg-body-tertiary py-3">
                <Container>
                    2023 Fidenz Technologies
                </Container>
            </footer>
        </div>
    )
}

export default Layout;