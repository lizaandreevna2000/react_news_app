import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, editArticle} from '../actions/newsActions'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class updateArticle extends React.Component {
    state = {
        article: ''
    };
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchArticle(id);
    }   
    handleChange = e => {
        this.setState({
          article: {
            ...this.state.article,
            [e.target.id]: e.target.value
          }
        });
    };
    componentWillReceiveProps(nextProps) {
        const newArticle = nextProps.article;
        this.setState({
            article: newArticle.article
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const originalArticle = this.props.article;
        const updatedArticle = this.state.article;
        this.props.editArticle(originalArticle._id, updatedArticle);
    }
    render() {
        const { article } = this.props;
        return (
            <div className = 'box'>
                <form onSubmit={this.handleSubmit}>
                    <p>Edit your article</p>
                    <input className="input" id='title' defaultValue={article.title}  onChange={this.handleChange.bind(this)}  type="text"></input>
                    <textarea className="textarea"  id='content' defaultValue={article.content} onChange={this.handleChange.bind(this)}></textarea>
                    <button type='submit' className="button is-dark" onClick={this.handleSubmit}>Submit</button>
                    <Link to="/"><button  className="button is-dark">Cansel</button></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    article: state.news.item
});

const mapDispatchToProps = (dispatch) => {
    return {
      fetchArticle : (id) => dispatch(fetchArticle(id)),
      editArticle: (id, article) => dispatch(editArticle(id, article))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(updateArticle);