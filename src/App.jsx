import './components/sass/main.scss'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SipCalculator from './components/SipCalculator';
import UserData from './components/user/UserData';
import NotFound from './components/NotFound';
import AddUser from './components/user/AddUser';




function App() {
  return (

   <div className="">

    <BrowserRouter>
      <Navbar />
        <Routes>
            {/* <Route index element={<Home  />} /> */}
            <Route index path="/" element={<Home  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/sipcalculator" element={<SipCalculator  />} />
            <Route path="/user/add" element={<AddUser />} />
            <Route path="/user" element={<UserData />} />
            <Route element={<NotFound />} />

        </Routes>
      <Footer  />
    </BrowserRouter>


</div>

  )
}

export default App
