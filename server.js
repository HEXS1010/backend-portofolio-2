equire("dotenv").config();

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
app.get("/comment", async (req, res) => {
  const { data, error } = await supabase
    .from("comment")
    .select("*")
    .order("id", { ascending: true });

  if (error) return res.status(500).json({ error });
  res.json(data);
});

// ====== POST komentar ======
app.post("/comment", async (req, res) => {
  const { nama, komen, owner } = req.body;

  if (!nama || !komen)
    return res.status(400).json({ error: "Nama dan komentar wajib diisi" });

  const { data, error } = await supabase
    .from("comment")
    .insert([{ nama, komen, owner }]);

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

// ====== DELETE komentar ======
app.delete("/comment/:id", async (req, res) => {
  const id = req.params.id;

  const { error } = await supabase
    .from("comment")
    .delete()
    .eq("id", id);

  if (error) return res.status(500).json({ error });

  res.json({ success: true });
});

// ====== Jalankan server ======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Server berjalan di port:", PORT)
);
