export const schoolInfo = {
  name: "Escola Infantil e Fundamental Primeiros Passos",
  city: "Belo Horizonte - MG",
  whatsapp: "(31) 99999-9999",
  colors: ["#1F6FEB", "#22C55E", "#FDE68A"]
};

export const highlights = [
  {
    title: "Educação afetiva e acolhedora",
    description: "Equipe preparada para apoiar cada criança no ritmo ideal de aprendizagem."
  },
  {
    title: "Estrutura segura e criativa",
    description: "Ambientes planejados para estimular autonomia, movimento e imaginação."
  },
  {
    title: "Comunicação transparente",
    description: "Portal digital com diário escolar, comunicados e calendário sempre atualizados."
  }
];

export const classes = [
  "Maternal",
  "Jardim I",
  "Jardim II",
  "1º Ano",
  "2º Ano",
  "3º Ano",
  "4º Ano",
  "5º Ano"
];

export const team = [
  {
    name: "Marina Ribeiro",
    role: "Diretora Pedagógica",
    description: "Especialista em desenvolvimento infantil e gestão escolar."
  },
  {
    name: "Ricardo Almeida",
    role: "Coordenador do Fundamental I",
    description: "Foco em projetos interdisciplinares e aprendizagem ativa."
  },
  {
    name: "Paula Santos",
    role: "Coordenação Infantil",
    description: "Experiência em educação socioemocional e alfabetização lúdica."
  }
];

export const gallery = [
  {
    title: "Sala Maker",
    description: "Robótica e criatividade para o fundamental."
  },
  {
    title: "Brinquedoteca",
    description: "Espaço para experiências sensoriais e leitura guiada."
  },
  {
    title: "Quadra Coberta",
    description: "Aulas de esporte e recreação protegidas."
  },
  {
    title: "Horta Pedagógica",
    description: "Aprendizado sobre natureza, nutrição e sustentabilidade."
  }
];

export const diaryEntries = [
  {
    id: 1,
    date: "2024-05-14",
    className: "2º Ano",
    student: "Lívia Santos",
    text: "Hoje exploramos a leitura de pequenas histórias e realizamos uma atividade de escrita coletiva.",
    photos: ["/photos/diary-1.jpg", "/photos/diary-2.jpg"],
    attachments: ["Plano-de-aula.pdf"],
    createdBy: "Prof. Ana"
  },
  {
    id: 2,
    date: "2024-05-13",
    className: "2º Ano",
    student: "Lívia Santos",
    text: "Trabalhamos noções de matemática usando jogos de tabuleiro e desafios em grupo.",
    photos: ["/photos/diary-3.jpg"],
    attachments: [],
    createdBy: "Prof. Ana"
  }
];

export const announcements = [
  {
    title: "Reunião de pais",
    date: "20/05",
    text: "Encontro presencial para apresentar os projetos do trimestre."
  },
  {
    title: "Campanha do agasalho",
    date: "Até 30/05",
    text: "Tragam roupas em bom estado para doação."
  }
];

export const calendarEvents = [
  {
    date: "22/05",
    title: "Saída pedagógica ao museu"
  },
  {
    date: "29/05",
    title: "Avaliação diagnóstica"
  },
  {
    date: "07/06",
    title: "Festa junina"
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

export const portalUsers = [
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
