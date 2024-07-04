import express from "express";
import path from "path";

const app = express();
const PORT = 4444;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../../public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public", "index.html"));
});

app.get("/test", (req, res) => {
  res.status(200).send("Test Route");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
