import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';


export class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            pages: props.pages
        }
    }

    render(){
        const pageLinks = this.state.pages.map((title, idx) => 
            <span key={idx}> 
                <Link className="MenuLink" to={"/"+title}>{title}</Link> 
            </span>
        );
        
        return (<div>
            {pageLinks}        
        </div>);         
    }
}

export class Description extends Component {
    constructor(props){
        super(props);
        this.state = {
            article: null,
            articlePath: props.articlePath,
        }
        this.getArticle = this.getArticle.bind(this);
    }

    componentDidMount(){
        this.getArticle();
    }

    getArticle() {
        if (this.state && this.state.articlePath){
            fetch('/public/html/'+this.state.articlePath)
            .then((r) => r.text())
            .then(text => {
                if (this.refs && this.refs.articleRef){
                    this.setState({
                        article: text
                    });
                }
            });
        }
    }

    render(){
        return (
            <div ref="articleRef">
                <div>
                    {parse(this.state.article ? this.state.article : "")}
                </div>
            </div>
        );
    }
}

export class Project extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <img src="" />
            </div>
        );
    }
}

