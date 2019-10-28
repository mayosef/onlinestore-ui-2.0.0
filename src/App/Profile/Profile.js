import React from 'react';
import UserService from '../services/user.service';
import Avatar from './Avatar';
import { Formik, Form, Field } from "formik";
import './Profile.scss'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            editMode:false
        };
    }

    componentDidMount() {
        UserService
            .me()
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user:user  
                })
                console.log(user)
            })
    }

    changeState() {
        this.setState({editMode: !this.state.editMode})
    }
    
    send(user) {
        UserService.edit(this.state.user._id, user)
        .then(res => res.json())
        .then(user => {
            this.setState({user})
        })
    }
    handleChange(event) {
        console.log(event)
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        if(!this.state.editMode) {
            return (
                <div className="container">
                    <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
                        <div>
                            <div className="profile-edit-btn"><a href="#" onClick={this.changeState.bind(this)}>Edit</a></div>
                        </div>
                        <div className="container-profile">
                          <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <h2>Welcome{`${this.state.user.name}`}!</h2>
                                        <div className="upload-file">Change photo</div>

                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                      <div className="col-md-3 col-lg-3">
                                          <img className="image" src={`http://localhost:4000/users/` + this.state.user.image}></img>
                                          <div className=" col-md-9 col-lg-9 ">
                                            <div className="table table-user-information">
                                                <table>
                                                      <tr>
                                                        <td>Full name</td>
                                                        <td>{this.state.user.name}</td>
                                                      </tr>
                                                      <tr>
                                                        <td>Email address</td>
                                                        <td>{this.state.user.email}</td>

                                                      </tr>
                                                      <tr>
                                                        <td>Adress</td>
                                                      </tr>
                                                      <tr>
                                                        <td>Date of birth</td>
                                                        <td>{this.state.user.age}</td>
                                                      </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            );
        } else {
            return (
              <div className="container">
              <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
                  <div>
                      <div className="profile-edit-btn"><a href="#" onClick={this.changeState.bind(this)}>Edit</a></div>
                  </div>
                  <div className="container-profile">
                    <div className="panel panel-info">
                          <div className="panel-heading">
                              <div className="panel-title">
                                  <h2>Welcome{`${this.state.user.name}`}!</h2>
                                  <div className="upload-file">Change photo</div>
                              </div>
                          </div>
                          <Formik
                          initialValues={{
                          user:this.state.user.name,
                          email:this.state.user.email,
                          age:this.state.user.age}}
                          onChange={this.handleChange.bind(this)}
                          onSubmit={this.send.bind(this)}>
                              <Form>
                                <div className="panel-body">
                                  <div className="row">
                                    <div className="col-md-3 col-lg-3">
                                      <img className="image" src={`http://localhost:4000/users/` + this.state.user.image}></img>
                                      <div className=" col-md-9 col-lg-9 ">
                                        <div className="table table-user-information">
                                          <table>
                                                <tr>
                                                  <td>Full name</td>
                                                  <td><Field type="text" name="name" className="fullname"></Field></td>
                                                </tr>
                                                <tr>
                                                  <td>Email address</td>
                                                  <td><Field type="text" name="email" className="email"></Field></td>

                                                </tr>
                                                <tr>
                                                  <td>Adress</td>
                                                </tr>
                                                <tr>
                                                  <td>Date of birth</td>
                                                  <td><Field type="text" name="age" className="age"></Field></td>
                                                </tr>
                                                <tr>
                                                    <button className="btn btn-success">Submit changes</button>
                                                    <button className="btn btn-danger">Cancel changes</button>
                                                </tr>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>
                              </Form>
                          </Formik>

                </div>
              </div>
          </div>
        </div>
                // <div className="main-profile">
                //   <div className="container">
                //     <div className="profile-content">
                //       <div className="edit-profile"><a href="#" onClick={this.changeState.bind(this)} >Edit</a></div>                  
                //   <div className="profile-body">
                //     <h3>Edit info:</h3>
                //     <Formik
                //   initialValues={{
                //     firstName: this.state.user.name,
                //     email: this.state.user.email,
                //   }}
                //   onChange={this.handleChange.bind(this)}
                //   onSubmit={this.send.bind(this)}
                // >
                //   <Form>
                //               <div className="info-field">
                //               <span> First name: </span><Field type="text" name="name" className="first-name" placeholder={this.state.user.firstName}/>
                //             </div>

                //             <div className="info-field">
                //             <span> Email: </span><Field type="email" name="email" className="email-address" placeholder={this.state.user.email}/>
                //             </div>

                //       <div >
                //       <input type="submit" value="submit" className="btn btn-primary" />
                //     </div>
                //       </Form>
                //       </Formik>
                //   </div>
                //   </div>
                //   </div>
                // </div>
              );
              }
        

    }
}
export default Profile;