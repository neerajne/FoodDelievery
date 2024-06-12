import express from 'express'; // Correctly import express
import cors from 'cors'; // Use import for cors middleware
import { connectDB } from './config/db.js'; // Use import for your db module
import { foodRouter } from './routes/foodRoute.js';
import { userRouter } from './routes/userRoute.js';
import { cartRouter } from './routes/CartRoute.js';
import "dotenv/config" ;
import { orderRouter } from './routes/orderRoutes.js';


const app = express();
const port = 8080;


app.use(express.json());
app.use(cors());

// Database connection 
connectDB();

//API ENDPOINT
app.use("/api/food", foodRouter) ;
app.use("/images"  , express.static('uploads')) ;
app.use("/api/user" , userRouter);
app.use("/api/cart" ,cartRouter )
app.use("/api/order" , orderRouter)


app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Port is listening on port ${port}`);
});
