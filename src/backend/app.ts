import express from "express";
import path from "path";

import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../../public")));

app.get("/test", (req, res) => {
	res.status(200).send("Test Route");
});

app.use("/auth", authRoutes);

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../../public", "index.html"));
});

export default app;
