import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './components/AboutUs';
import App from './App';
import ProjectDes from './pages/ProjectDes';
import Projects from './components/Projects';

 export const routes = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'about',
                element: <AboutUs />
            },
            {
                path:'',
                element: <Home />
            },
            {
                path:":project",
                element: <ProjectDes />
            },
            {
                path:"Allproject",
                element:<Projects/>
            }
        ]
    }
])