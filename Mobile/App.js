"use strict";

import React from "react";
import ReactDOM from "react-dom";
import MobileCompanies from "./components/MobileCompanies";


let company = require('./company');

ReactDOM.render(<MobileCompanies companies={company}/>, document.getElementById('container'));