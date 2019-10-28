import React from 'react';
import userService from '../../services/user.service';

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            submitting:false
        }
    }
    componentDidMount() {
        userService.getAll() 
        .then(res => res.json())
        .then(users => {
            this.setState({users})
        })
    }
    render() {
        return (
            <div className="admin-panel">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                User
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                isAdmin
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, i) => {
                            return <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.image}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className="btn btn-danger">Edit</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Users;