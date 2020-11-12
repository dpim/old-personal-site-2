import ReactMarkdown from "react-markdown";
import Menu from "../components/menu";
import { MarkdownCard } from "../components/card";

const Home = ({ projects, tapiocaDescription }) => (
  <div className="container">
    {Menu("Things I've Built")}
    <div className="grid">
      {getTapiocaCard(tapiocaDescription)}
      {projects.map((project, i) => MarkdownCard(project, i))}
    </div>
  </div>
);

export async function getStaticProps() {
  const projectNames = [
    "lttrs",
    "4ej",
    "graphql",
    "grassroots",
    "cardiyo",
    "206",
    "wedge",
    "bottle",
    "helio",
    "mpj",
  ];

  const projects = [];

  for (let projectName of projectNames) {
    const description = await import(
      `../public/text/projects/${projectName}.md`
    );
    projects.push(description.default);
  }

  const tapiocaDescription = await import(`../public/text/projects/tapioca.md`);
  return {
    props: {
      projects: projects,
      tapiocaDescription: tapiocaDescription.default,
    },
  };
}

const getTapiocaCard = (description) => (
  <div className="card">
    <h3 className="title">Tapioca - API Help Desk</h3>
    <iframe
      className="video"
      src="https://player.vimeo.com/video/321909326"
      width="560"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
    <div>
      <ReactMarkdown source={description} className="card-body" />
    </div>
  </div>
);

export default Home;
