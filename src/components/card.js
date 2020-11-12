import ReactMarkdown from "react-markdown";

const Card = (title, description) => (
  <div className="card">
    <h3 className="title">{title}</h3>
    {description}
  </div>
);

const MarkdownCard = (content, key) => (
  <div className="card" key={key}>
    <ReactMarkdown source={content} className="card-body" />
  </div>
);

const DescriptionCard = (content, key) => (
  <div className="text-card">
    <ReactMarkdown source={content} className="card-body" />
  </div>
);

export { Card, MarkdownCard, DescriptionCard };
