import React from 'react';
import './Comment.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like:0,
        };
        this.thumbsUp = this.thumbsUp.bind(this);

    }
    // Method to +1 A Comment
    thumbsUp() {
        console.log(this.state.like+=1);
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
                    {this.state.like}
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
