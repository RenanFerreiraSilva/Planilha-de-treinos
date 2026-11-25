import { createBrowserRouter } from 'react-router-dom';
import { Form } from '../pages/Form';
import { Home } from '../pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Form />
    },
    {
        path: '/home',
        element: <Home />
    }
]);