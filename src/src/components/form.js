import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Form extends React.Component {
    constructor(props) {
        super(props) 
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: props.title || '',
            content: props.content || ''
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }
    render() {
        return (
            <div className='box'>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" name ='title' value={this.state.title} onChange={this.handleChange} type="text"></input>
                    <textarea className="textarea" name ='content' value={this.state.content} onChange={this.handleChange}></textarea>
                    <button type='submit' className="button is-dark">Submit</button>
                    <Link to="/"><button className="button is-dark">Cansel</button></Link>
                </form>
            </div>
        )
    }
}


export default Form