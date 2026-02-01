import express from "express";
import cors from "cors";
import multer from "multer";
import { announcements, diaryEntries, students, users } from "./data.js";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  return res.json({
    id: user.id,
    role: user.role,
    name: user.name,
    studentId: user.studentId || null
  });
});

app.get("/api/portal/student/:id", (req, res) => {
  const student = students.find((item) => item.id === req.params.id);
  if (!student) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }
  return res.json(student);
});

app.get("/api/diary", (req, res) => {
  return res.json(diaryEntries);
});

app.post(
  "/api/diary",
  upload.fields([
    { name: "photos", maxCount: 6 },
    { name: "attachments", maxCount: 2 }
  ]),
  (req, res) => {
    const { date, className, student, text, createdBy } = req.body;
    const newEntry = {
      id: diaryEntries.length + 1,
      date,
      className,
      student,
      text,
      createdBy,
      photos: (req.files?.photos || []).map((file) => `/uploads/${file.filename}`),
      attachments: (req.files?.attachments || []).map((file) => file.originalname)
    };

    diaryEntries.unshift(newEntry);
    return res.status(201).json(newEntry);
  }
);

app.get("/api/announcements", (req, res) => {
  return res.json(announcements);
});

app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
