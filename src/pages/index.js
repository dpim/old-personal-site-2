import Head from 'next/head';
import Menu from '../components/menu';
import { MarkdownCard } from '../components/card';

const Home = ({content}) => {
  return (
    <div className="container">
      <Head>
        <title>Dmitry Pimenov</title>
      </Head>
      <div>
        {Menu("Dmitry Pimenov")}
        <div className="grid">
            {MarkdownCard(content)}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
    const content = await import(`../public/text/about.md`);
    return { 
        props: {content : content.default}
    }
}

export default Home;
