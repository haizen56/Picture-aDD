

import dotenv from "dotenv";
import index1 from "./index.js";

import {connectDatabase} from "./config/database.js"

dotenv.config({ path: " /backend/config/config.env "  })

connectDatabase();


//index1.use('/api', apiRoutes);

   index1.listen(process.env.PORT, () => {
    console.log(`Server is running: ${process.env.PORT}`);

});




// const express = require('express');
// const apiRoutes = require('./api/apiRoutes.js');

// const app = express();

// Other app configurations...

// Mount the API routes

// Start the server
