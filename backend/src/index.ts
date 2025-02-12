import express from "express";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes"; // Import the email routes
import cors from "cors";
import { frontendBaseUrl } from "./utils/constants";

dotenv.config({ path: "./.env" });

const corsOptions = {
 origin: frontendBaseUrl,
}

const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", emailRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
