import Menu from "../components/menu";
import { DescriptionCard } from "../components/card";

const Home = ({ content }) => (
  <div className="container">
    {Menu("Reach Out")}
    <div className="grid">{DescriptionCard(content)}</div>
  </div>
);

export async function getStaticProps() {
  const content = await import(`../public/text/contact.md`);
  return {
    props: { content: content.default },
  };
}

export default Home;
