import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, editArticle} from '../actions/newsActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from './form';
import preloader from '../assets/img/loader.gif'

class updateArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: this.props.article.title,
            content: this.props.article.content,
        }
    } 
    componentDidMount() {
        const { fetchArticle, match } = this.props
        fetchArticle(match.params.id);
    }
    updateHandler = () => {
        console.log(this.state)
        this.props.editArticle(this.props.article._id, this.state);
        this.props.history.push("/");
    }
    render() {
        const { isFetching } = this.props
        return (
            <div>
                {isFetching && <img src={preloader} className = 'preloader' />}
                {!isFetching && <Form handleSubmit = {this.updateHandler} title = {this.props.article.title} content = {this.props.article.content}>
                </Form>}
            </div>
        );
    }

}

editArticle.propTypes = {
    fetchArticle: PropTypes.func.isRequired,
    editArticle: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return ({
        article: state.news.item,
        isFetching: state.news.isFetching
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticle: (id) => dispatch(fetchArticle(id)),
        editArticle: (id, article) => dispatch(editArticle(id, article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(updateArticle);