import { Routes, Route, createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import Header from './components/Header.tsx';
import Home from "./components/Home.tsx";
import Books from "./components/Books.tsx";
import Projects from "./components/Projects.tsx";
import Courses from "./components/Courses.tsx";
import Education from "./components/Education.tsx";
import Experiences from "./components/Experiences.tsx";
import Interests from "./components/Interests.tsx";
import Footer from "./components/Footer.tsx";

import styled from "styled-components";

// Container component to handle layout styling
const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

// Main content styling to adjust width and padding
const Main = styled.main`
    padding: 2%;
    width: 80%;
    margin-top: 2%;

    @media (max-width: 750px) {
        width: 100%;
    }
`;

// Root component to manage routes and dynamic header props based on current page
function Root() {
    const location = useLocation(); // Get the current route location

    // Function to determine header subtitle and style based on the current pathname
    const getHeaderProps = () => {
        switch (location.pathname) {
            case '/':
                return { subtitle: 'Home', style: { backgroundColor: 'darkgrey' } };
            case '/Books':
                return { subtitle: 'Book List', style: { backgroundColor: 'lightblue' } };
            case '/Experiences':
                return { subtitle: 'Experiences', style: { backgroundColor: 'lightgreen' } };
            case '/Projects':
                return { subtitle: 'Projects', style: { backgroundColor: 'lightcoral' } };
            case '/Courses':
                return { subtitle: 'Courses', style: { backgroundColor: 'lightgrey' } };
            case '/Education':
                return { subtitle: 'Education', style: { backgroundColor: 'lightpurple' } };
            case '/Interests':
                return { subtitle: 'Interests', style: { backgroundColor: 'lightsteelblue' } };
        }
    };

    return (
        <>
            {/* Render the dynamic Header component based on the current route */}
            <Header {...getHeaderProps()} />

            {/* Layout structure with Nav and Main content */}
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path={`/`} element={<Home />} />
                        <Route path={`/Books`} element={<Books />} />
                        <Route path={`/Projects`} element={<Projects />} />
                        <Route path={`/Courses`} element={<Courses />} />
                        <Route path={`/Education`} element={<Education />} />
                        <Route path={`/Experiences`} element={<Experiences />} />
                        <Route path={`/Interests`} element={<Interests />} />
                    </Routes>
                </Main>
            </Container>

            {/* Render the Footer component */}
            <Footer />
        </>
    );
}

// Define the router with the Root component as the main route handler
const router = createBrowserRouter(
    [
        { path: "*", Component: Root }, // Catch-all route to load Root
    ]
);

// Main App component that provides the router to the application
export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
