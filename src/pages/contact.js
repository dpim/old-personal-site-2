import Head from 'next/head';
import Menu from '../components/menu';
import { MarkdownCard } from '../components/card';

const Home = ({ content }) => (
    <div className="container">
        <Head>
            <title>Dmitry Pimenov</title>
        </Head>
        <div>
            {Menu("Contact Dmitry")}
            <div className="grid">
                {MarkdownCard(content)}
            </div>
        </div>
    </div>
);

export async function getStaticProps() {
    const content = await import(`../public/text/contact.md`);
    return {
        props: { content: content.default }
    }
}


export default Home;
