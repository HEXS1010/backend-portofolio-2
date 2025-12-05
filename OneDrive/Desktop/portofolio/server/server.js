// ====== Load environment variables ======
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const sgMail = require("@sendgrid/mail");

// ====== Setup Express ======
const app = express();
app.use(cors());
app.use(express.json());

// ====== Setup Supabase & SendGrid ======
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ====== GET komentar ======
app.get("/comments", async (req, res) => {
  const { data, error } = await supabase.from("comments").select("*").order("id", { ascending: true });
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// ====== POST komentar ======
app.post("/comments", async (req, res) => {
  const { nama, komen } = req.body;
  if (!nama || !komen) return res.status(400).json({ error: "Nama dan komentar wajib diisi" });

  const { data, error } = await supabase.from("comments").insert([{ nama, komen }]);
  if (error) return res.status(500).json({ error });

  try {
    await sgMail.send({
      to: process.env.EMAIL_TO,
      from: process.env.SENDGRID_VERIFIED_SENDER,
      subject: `Komentar baru dari ${nama}`,
      text: komen,
    });
  } catch (e) {
    console.error("Gagal kirim email:", e);
  }

  res.json({ success: true, data });
});

// ====== Jalankan server ======
app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));
