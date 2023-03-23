// import express dari depedencies
import express from "express";
// import cors dari depedencies
import cors from "cors";

// membuat variable app untuk menggunakan express();
const app = express();

// app menggunakan cors();
app.use(cors());
// app menggunakan express.json() untuk mengambil/mendapatkan data
app.use(express.json());

// app jalan/listen pada port 5000, dan memiliki callback ketika diaktifkan berupa console.log();
app.listen(5000, () => {
  console.log("Server Telah berjalan di port : 5000");
});
