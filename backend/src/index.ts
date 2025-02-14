import express from "express";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes";
import cors from "cors";

dotenv.config({ path: "./.env" });

const corsOptions = {
    origin: (origin: string, callback: Function) => {
        const allowedOrigins = [process.env.DEVELOPMENT_URL as string, process.env.PRODUCTION_URL as string];
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); 
        } else {
            callback(new Error("Not allowed by CORS"), false); 
        }
    },
};

const app = express();
const port = process.env.PORT;
//@ts-ignore
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", emailRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
