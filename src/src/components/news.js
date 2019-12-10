import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchNews, deleteArticle } from '../actions/newsActions'
import { parseDate } from '../helper/date'
import { Link } from "react-router-dom";
import { FaPencilAlt } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';
import preloader from '../assets/img/loader.gif';


class News extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        const {news, isFetching} = this.props;
        const postItems = news.map((item)=> (
            <div className="box" key={item._id}>
            <article className="media">
                <div className="media-content">
                <div className="content">
                    <p>
                    <Link to={`/news/${item._id}`}><strong>{item.title}</strong></Link><br />
                    <small>author: {item.creator.displayName}  <Link to={`/news/${item._id}/edit`}><FaPencilAlt/></Link> <FaRegWindowClose onClick={()=>this.props.deleteArticle(item._id)}/></small> <br /> <small>created by: { parseDate(item.createDate)}</small>
                    <br />
                    {item.content}...
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                    <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                        <i className="fas fa-reply" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
        </div>
        ))
        return (
            <div className = 'box-container'>
                <h1 className='title has-text-white'>News</h1>
                {isFetching && <img src={preloader} className = 'preloader' />}
                {!isFetching && news && (
                    <Fragment>
                        {postItems}
                    </Fragment>
                )}
            </div>
        )
    }
}

News.propTypes = {
    fetchNews: PropTypes.func.isRequired,
    deleteArticle: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews: () => dispatch(fetchNews()),
        deleteArticle: (id) => dispatch(deleteArticle(id))
    }
}

const mapStateToProps = state => ({
    news: state.news.items,
    isFetching: state.news.isFetching,
})

export default connect(mapStateToProps, mapDispatchToProps )(News);

