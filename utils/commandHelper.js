const COMMANDS = [
  {
    command: "about",
    description: "Sobre mi",
  },
  {
    command: "education",
    description: "Mi educación",
  },
  {
    command: "skills",
    description: "Habilidades",
  },
  {
    command: "projects",
    description: "Proyectos",
  },
  //{
  //  command: "resume",
  //  description: "Curriculum",
  //},
  {
    command: "contact",
    description: "Contactame",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Limpiar terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>Mis proyectos públicos</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />`,
  about: () => `Mi nombre es Jabes. Tengo ${getAge(
    "February 8, 2002"
  )} años y soy desarrollador de software.
    <br/><br/>
    Empecé mi camino programando microprocesadores en ASM y C. Me terminé enamorando de .NET mientras exploraba C# y F#, ahora puedo decir que es mi framework principal.
    <br /><br />
    Adicionalmente, amo programar en SAP ABAP (para el nivel empresarial) y Python (análisis de datos).
    <br /><br />
    Estoy empezando en el mundo de Javascript y Web Development con React y NextJs.
    <br /><br />
  `,
  education: () =>
    `Soy egresado del <a href="https://ipl.edu.do/" target="_blank">Instituto Politécnico Loyola</a> como Tecnólogo en Electónica Digital mención Microcomputación.
    <br /><br />
    Actualmente estoy cursando la carrera universitaria de Desarrollo de Software en el <a href="https://itla.edu.do/" target="_blank">Instituto Tecnológico de las Américas</a>`,
  skills: () => `
  <div class="skill"><b>core</b>: C#, ABAP y Python<br /></div>
  <div class="skill"><b>frameworks</b>: .NET, React, NextJS, Express y Flask/Fast API<br /></div>
  <div class="skill"><b>database</b>: SQL Server, MySQL, SQLite y NoSQL<br /></div>
<br />
  También tengo experiencia con desarrollos mobile con Flutter. <br />
  `,
  projects: getProjects,
  contact: getContacts,

  error: (input) =>
    `<div class="help-command">sh: Comando desconocido: ${input}</div><div class="help-command">Ejecuta \`help\` para ver la lista de comandos disponibles`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) edad--;

  return age;
}
