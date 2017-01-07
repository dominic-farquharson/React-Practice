import React from 'react';
import './Comment.css';


class Comment extends React.Component {
  constructor() {
    super();

  }

  thumbsUp() {

  }

  thumbsDown() {

  }


  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.message} <span>Likes:</span> {this.props.likes}</p>
        <hr />
      </div>
    )
  }
}

export default Comment;
