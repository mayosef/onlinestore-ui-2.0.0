import React from 'react';
import userService from '../services/user.service';


class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        userService.me()
        .then(res => res.json())
        .then(user => {
            this.setState({user})
            console.log(user)
        })
    }
render() {
    return(
        <div className="avatar">
            <img src={`http://localhost:4000/users/${this.state.user.image}`} className="user-avatar"/>
        </div>
    )
}
}

export default Avatar;