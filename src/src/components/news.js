import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/newsActions'
import { parseDate } from '../helper/date'
import { Link } from "react-router-dom";
import { FaPencilAlt } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';


class News extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        const postItems = this.props.news.map((item)=> (
            <div className="box" key={item._id}>
            <article className="media">
                <div className="media-content">
                <div className="content">
                    <p>
                    <Link to={`/news/${item._id}`}><strong>{item.title}</strong></Link><br />
                    <small>author: {item.creator.displayName}  <Link to={`/news/${item._id}/edit`}><FaPencilAlt /></Link> <FaRegWindowClose /></small> <br /> <small>created by: { parseDate(item.createDate)}</small>
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
            <div>
                <h1 className='title has-text-white'>News</h1>
                {postItems}
            </div>
        )
    }
}

News.propTypes = {
    fetchNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    news: state.news.items,
})

export default connect(mapStateToProps, { fetchNews } )(News);

