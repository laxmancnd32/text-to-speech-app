import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContainer from "../appContainer";
import Home from "./home"

const RoutesComponent = () => {
    return (
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<AppContainer />}>
                <Route index element={<Home />} />
                {/* <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} /> */}
                </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default RoutesComponent;