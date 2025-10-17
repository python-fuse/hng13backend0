import express from "express";
import { getCatFact } from "./cats.js";

const PORT = 3000;

const app = express();

app.use("/me", async (req, res) => {
  const currentTimestamp = new Date();

  const catFact = await getCatFact();

  res.status(catFact.status === "success" ? 200 : 500).json({
    status: catFact.status,
    user: {
      email: "ummuktar917@gmail.com",
      name: "Umar Muhammad Muktar",
      stack: "Node/Express",
    },
    timestamp: currentTimestamp,
    fact: catFact.data,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});
