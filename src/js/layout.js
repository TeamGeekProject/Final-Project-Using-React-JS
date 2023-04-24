import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Who } from "./views/who";
import { Home } from "./views/home";
import { Contact } from "./views/contact";
import { FormContact } from "./views/addContact";
import { EditContact } from "./views/editContact";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/who" element={<Who />} />
            <Route path="/add" element={<FormContact />} />
            <Route path="/edit/:contactID" element={<EditContact />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Who />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
