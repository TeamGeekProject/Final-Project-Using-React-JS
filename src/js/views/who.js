import React from "react";
import "../../styles/home.css";
//import { useContext, createContext, useState } from "react";
//import { Context } from "../store/appContext";

export const Who = () => (
  <div className="text-center mt-5">
    <div className="row justify-content-center">
      <div className="col-6">
        <p>This project has been created by:</p>

        <div class="list-group">
          <a
            href="https://github.com/Balim1"
            class="list-group-item list-group-item-action itemFilter"
            aria-current="true"
          >
            Balim1
          </a>
          <a
            href="https://github.com/joaarg86"
            class="list-group-item list-group-item-action itemFilter"
          >
            joaarg86
          </a>
          <a
            href="https://github.com/raulyfs11"
            class="list-group-item list-group-item-action itemFilter"
          >
            raulyfs11
          </a>
          <a
            href="https://github.com/spacemc2"
            class="list-group-item list-group-item-action itemFilter"
            tabindex="-1"
            aria-disabled="true"
          >
            spacemc2
          </a>
        </div>
      </div>
    </div>
  </div>
);
