import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from './../Projects/Projects';
import Contact from './../Cotacts/Contact';
import About from './../About/About';
import LayoutPage from '../Pages/LayoutPage';

const RoutePages = createBrowserRouter([
    {
        element: <LayoutPage />,
        path: "/",
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element: <Projects />,
                path: "/project"
            },
            {
                element: <div style={{color: "white", background: "black", height: "100vh",display: "flex", justifyContent: "center", alignItems: "center"}}><h1>The blog page is comming...</h1></div>,
                path: "/blog"
            },
            {
                element: <Contact />,
                path: "/contact"
            },
            {
                element: <About />,
                path: "/about"
            },
        ]
    }
])

export default RoutePages;