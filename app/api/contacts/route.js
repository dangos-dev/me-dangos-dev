export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "dangos-dev",
      link: "https://github.com/dangos-dev",
    },
    {
      medium: "email",
      username: "jabes@dangos.dev",
      link: "mailto:jabes@dangos.dev",
    },
    {
      medium: "linkedin",
      username: "jabesrivas",
      link: "https://www.linkedin.com/in/jabesrivas/",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
