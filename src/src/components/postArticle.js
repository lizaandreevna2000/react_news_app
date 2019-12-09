import React from 'react';
import Form from './form';
import { createArticle } from '../actions/newsActions';
import { connect } from "react-redux";

class postArticle extends React.Component {
    createHandler = (data) => {
        this.props.createArticle(data);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1 className='title has-text-white'>Please, create your article</h1>
                <Form handleSubmit={this.createHandler}></Form>
            </div>
        );
    }
}



export default connect(null, { createArticle })(postArticle);