import React from 'react';
import { fetchArticle } from '../actions/newsActions'
import { connect } from "react-redux";
import { parseDate } from '../helper/date'

class Article extends React.Component {
  componentDidMount() {
    const { fetchArticle, match } = this.props
    fetchArticle(match.params.id);
  } 
    render() {
        let elem = this.props.elem;
        console.log(elem.creator)
        return (
          <div className="box" key={elem._id}>
            <article className="media">
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{elem.title}</strong><br />
                    {/* <small>author: {elem.creator.displayName}</small> <br />  */}
                    <small>create by: {parseDate(elem.createDate)}</small> <br /> 
                    <br />
                    {elem.content}...
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                    <a className="level-elem" aria-label="reply">
                        <span className="icon is-small">
                        <i className="fas fa-reply" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a className="level-elem" aria-label="retweet">
                        <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a className="level-elem" aria-label="like">
                        <span className="icon is-small">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
        </div>
        ) 
    } 
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArticle : () => dispatch(fetchArticle(props.match.params.id))
  }

}
const mapStateToProps = (state) => {
    return ({
      elem: state.news.item
    })
} 

export default connect( mapStateToProps, mapDispatchToProps )(Article)  