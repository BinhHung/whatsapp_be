import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
//dotEnv config
dotenv.config();
 
//create express app
const app = express();

//Morgan
if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"));
}
//Helmet
app.use(helmet());

//Parse json request url
app.use(express.json());

//Parse json request body
app.use(express.urlencoded({extended: true}));

app.post("/test", (req,res) => {
    res.send(req.body);
});

export default app;