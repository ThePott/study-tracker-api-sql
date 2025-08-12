import cors, { CorsOptions } from "cors";
import express from "express";
import router from "./src/router";

const app = express();
app.use(express.json());
app.use(express.text());

const corsOptions: CorsOptions = {
    origin: ["http://localhost:5173"],
    methods: ["OPTIONS", "GET", "POST", "PATCH", "DELETE"],
};
app.use(cors(corsOptions));
app.use("/", router)

const PORT = process.env.PORT || 3456
app.listen(PORT, () => console.log("---- neovim server is on:", PORT))
