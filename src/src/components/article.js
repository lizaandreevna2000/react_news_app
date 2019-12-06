import React from 'react';
import { fetchArticle } from '../actions/newsActions'
import { connect } from "react-redux";
import { parseDate } from '../helper/date'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class Article extends React.Component {
  componentDidMount() {
    const { fetchArticle, match } = this.props
    fetchArticle(match.params.id);
  } 
    render() {
        let elem = this.props.elem;
        return (
          <div>
            <article className="message is-dark" key = {elem._id}>
              <div className="message-header">
                <p>{elem.title}</p> 
                <button className="delete" aria-label="delete"></button>
              </div>
              <div className="message-body">
                  <h2>created by: {parseDate(elem.createDate)}</h2> <br />
                  {elem.content}
              </div>
            </article>
            <Link to={`/news/${elem._id}/edit`}><button className='button'>Go to Edit</button></Link>
          </div>
        ) 
    } 
}

Article.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  elem: PropTypes.object.isRequired,
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