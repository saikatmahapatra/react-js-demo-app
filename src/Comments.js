import React from 'react';
import ReactDOM from 'react-dom/client';
class Comments extends React.Component {
    render() {
        return 
        <div>
            <div className="user">
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
            </div>
            <div>
                <p>{this.props.comment.text}</p>
                <p>{this.props.comment.timestamp}</p>
            </div>
        </div>
    }
}

export default Comments;