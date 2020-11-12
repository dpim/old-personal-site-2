import Menu from "../components/menu";
import { DescriptionCard } from "../components/card";

const Home = ({ content }) => {
  return (
    <div className="container">
      {Menu("Dmitry Pimenov")}
      <div className="grid">{DescriptionCard(content)}</div>
    </div>
  );
};

export async function getStaticProps() {
  const content = await import(`../public/text/about.md`);
  return {
    props: { content: content.default },
  };
}

export default Home;
