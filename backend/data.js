export const users = [
  {
    id: "admin-1",
    role: "admin",
    name: "Direção",
    email: "admin@primeirospassos.com",
    password: "admin123"
  },
  {
    id: "prof-1",
    role: "professor",
    name: "Prof. Ana",
    email: "professor@primeirospassos.com",
    password: "prof123"
  },
  {
    id: "parent-1",
    role: "parent",
    name: "Fernanda Santos",
    email: "pais@primeirospassos.com",
    password: "pais123",
    studentId: "aluno-1"
  },
  {
    id: "student-1",
    role: "student",
    name: "Lívia Santos",
    email: "aluno@primeirospassos.com",
    password: "aluno123",
    studentId: "aluno-1"
  }
];

export const students = [
  {
    id: "aluno-1",
    name: "Lívia Santos",
    className: "2º Ano",
    guardian: "Fernanda Santos",
    email: "fernanda@exemplo.com"
  }
];

export const diaryEntries = [
  {
    id: 1,
    date: "2024-05-14",
    className: "2º Ano",
    student: "Lívia Santos",
    text: "Hoje exploramos a leitura de pequenas histórias e realizamos uma atividade de escrita coletiva.",
    photos: [],
    attachments: [],
    createdBy: "Prof. Ana"
  }
];

export const announcements = [
  {
    id: 1,
    title: "Reunião de pais",
    date: "20/05",
    text: "Encontro presencial para apresentar os projetos do trimestre."
  }
];
