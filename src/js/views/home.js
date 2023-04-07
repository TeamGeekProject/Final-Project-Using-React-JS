import React from "react";
import "../../styles/home.css";
//import { useContext, createContext, useState } from "react";
//import { Context } from "../store/appContext";


 export const Home = () => (
  <div className="text-center mt-5">
    <p>This project has been created by:</p>
    <ul className=" list-group">
      <li>
        <a
          className="link-secondary text-decoration-none"
          href="https://github.com/Balim1"
        >
          Balim1
        </a>
      </li>
      <li>
        <a
          className="link-secondary text-decoration-none"
          href="https://github.com/joaarg86"
        >
          joaarg86
        </a>
      </li>
      <li>
        <a
          className="link-secondary text-decoration-none"
          href="https://github.com/raulyfs11"
        >
          raulyfs11
        </a>
      </li>
      <li>
        <a
          className="link-secondary text-decoration-none"
          href="https://github.com/spacemc2"
        >
          spacemc2
        </a>
      </li>
    </ul>
  </div>
);
