import cors, { CorsOptions } from "cors";
import express from "express";
import debugRouter from "./src/routers/debugRouter";
import manageRouter from "./src/routers/manageRouter";
import progressRouter from "./src/routers/progressRouter";
import reviewCheckRouter from "./src/routers/reviewCheckRouter";
import { errorHandler } from "./src/errorHandler";

const app = express();
app.use(express.json());
app.use(express.text());

const corsOptions: CorsOptions = {
    origin: ["http://localhost:5173", "https://study-tracker.p-e.kr", "https://dev.study-tracker.p-e.kr"],
    methods: ["OPTIONS", "GET", "POST", "PATCH", "DELETE"],
};
app.use(cors(corsOptions));
app.use("/manage", manageRouter)
app.use("/progress", progressRouter)
app.use("/review-check", reviewCheckRouter)
app.use("/", debugRouter)
app.use(errorHandler)

const PORT = process.env.PORT || 3456
app.listen(PORT, () => console.log("---- neovim server is on:", PORT))
