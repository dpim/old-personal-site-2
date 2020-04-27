import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Menu from '../components/menu';
import { Card, MarkdownCard } from '../components/card';

const Home = ({projects, tapiocaDescription}) => (
    <div className="container">
        <Head>
            <title>Dmitry Pimenov</title>
        </Head>
        {Menu("Dmitry's Projects")}
        <div className="grid">
            {getTapiocaCard(tapiocaDescription)}
            {projects.map((project, i) => MarkdownCard(project, i))}
        </div>
    </div>
);

export async function getStaticProps() {

    const projectNames  = [
        "graphql", 
        "4ej", 
        "grassroots",
        "cardiyo",
        "206",
        "wedge",
        "bottle",
        "helio",
        "mpj"
    ];

    const projects = [];

    for (let projectName of projectNames){
        const description = await import(`../public/text/projects/${projectName}.md`);
        projects.push(description.default)
    }

    const tapiocaDescription = await import(`../public/text/projects/tapioca.md`);
    return {
        props: { projects: projects, tapiocaDescription: tapiocaDescription.default }
    }
}

const getTapiocaCard = (description) => (
    <div className="card">
        <h3 className="title">
            Tapioca - API Helpdesk
        </h3>
        <iframe src="https://player.vimeo.com/video/321909326" 
            width="600" height="360" frameBorder="0" 
            webkitallowfullscreen="true" mozallowfullscreen="true" 
            allowFullScreen={true}>
        </iframe>
        <div> 
            <ReactMarkdown source={description} className="card-body"/>
        </div>
    </div>
);


export default Home;
