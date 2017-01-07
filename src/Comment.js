import React from 'react';
import './Comment.css';

class Comment extends React.Component {
    constructor() {
        super();

    }
    // Method to +1 A Comment
    thumbsUp() {
        console.log('thumbs up')
    }

    // Method to -1 A Comment
    thumbsDown() {
        console.log('thumbs Down')
    }

    render() {
        return (
            <div>
                {/* User Name */}
                <p>{this.props.name}<br/>
                {/* User Message */}
                    {this.props.message}
                    <br/>
                    <span>Likes:</span>
                    {this.props.likes}
                    <br />
                    <button type="submit" onClick={this.thumbsUp}>+</button>
                    <button type="submit" onClick={this.thumbsDown}>-</button>
                </p>
                <hr/>
            </div>
        )
    }
}

export default Comment;
