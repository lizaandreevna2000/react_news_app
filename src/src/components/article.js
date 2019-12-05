import React from 'react';
import { fetchArticle } from '../actions/newsActions'
import { connect } from "react-redux";

class Article extends React.Component {
  /* componentDidMount() {
    const { fetchArticle, match } = this.props
    fetchArticle(match.params.id);
    console.log(match.params.id)
  } */
    render() {
        console.log(this.props.article[0])
        return (
        <h1>Article {/* {article.title} */}</h1>
        ) 
    } 
}


/* const mapStateToProps = (state) => {
    return ({
      article: state.news.items
    })
}  */

export default /* connect( *//*  mapStateToProps, { fetchArticle })( */Article/* )  */ 