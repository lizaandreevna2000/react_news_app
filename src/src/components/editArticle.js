import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, editArticle} from '../actions/newsActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from './form';

class updateArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: this.props.article.title || '',
            content: this.props.article.content || '',
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchArticle(id);
    }
    updateHandler = () => {
        const { title, content } = this.state;
        this.props.editArticle(this.props.article._id, {title, content});
        this.props.history.push("/");
    }
    render() {
        const { article } = this.props;
        return (
            <div>
                <Form handleSubmit={this.updateHandler}
                      title={article.title}
                      content={article.content}>
                </Form>
            </div>
        );
    }

}

editArticle.propTypes = {
    fetchArticle: PropTypes.func.isRequired,
    editArticle: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    article: state.news.item
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticle: (id) => dispatch(fetchArticle(id)),
        editArticle: (id, article) => dispatch(editArticle(id, article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(updateArticle);