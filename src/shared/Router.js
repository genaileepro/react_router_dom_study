import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Works from '../pages/Works';
import Work from '../pages/Work';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home/:userId" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="works" element={<Works />}></Route>
                <Route path="works/:id" element={<Work />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
