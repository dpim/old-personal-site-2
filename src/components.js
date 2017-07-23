import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Menu extends Component {
    render(){
        return <div>{this.props.pages.map( (title,idx) => <span key={idx}> 
            <Link className="MenuLink" to={"/"+title}>{title}</Link> </span>)}</div>            
    }
}

export class Description extends Component {
      render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
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

