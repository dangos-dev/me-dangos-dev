export async function GET(request) {
  const projects = [
    {
      name: "Anko",
      description:
        "Fan-made Genshin CDN/Filesystem",
      stack: ["Python", "Flask", "Gunicorn"],
      link: "https://cdn.anko.dangos.dev/",
      image: "",
      largeImage: "",
    },
    {
      name: "MCFYA",
      description:
        "Plataforma web para el centro educativo Marcos Castañer",
      stack: ["HTML", "CSS", "JS", "Moodle"],
      link: "https://mcfya.edu.do/",
      image: "",
      largeImage: "",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
