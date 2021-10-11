import {Form, Input, Button, Spin} from 'antd';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import Icon from "antd/es/icon";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import * as actions from '../store/actions/auth'


const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>
const FormItem = Form.Item

class RegistrationForm extends Component {

    handleSubmit = e => {
        e.preventDefault ()
        console.log ('submiited')
        const username = e.target.elements.username.value
        const password1 = e.target.elements.password1.value
        const password2 = e.target.elements.password2.value
        const email = e.target.elements.email.value
        console.log ('Received values of form:',
            username,
            password1,
            password2,
            email)
        if (username, password1, password2, email) {
            if (password1 === password2) {
                this.props.onAuth(username,email,password1, password2)
                this.props.history.push ('/')
            }
        }


    }

    render () {
        let errorMessge = null
        if (this.props.error) {
            errorMessge = (
                <p>{this.props.error.message}</p>
            )
        }
        return (
            <div>{
                this.props.loading ?
                    <Spin indicator={antIcon}/>
                    :
                    <form onSubmit={this.handleSubmit}
                          className="login-form"
                    >

                        <Form.Item
                            name="username"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Please input your email!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password1"
                            rules={[{required: true, message: 'Please input your Password!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password2"
                            rules={[{required: true, message: 'confirm password!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="confirm password"
                            />
                        </Form.Item>

                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                                Signup
                            </Button>
                            Or <NavLink
                            style={{marginRight: '10px'}} to='/login/'> Login
                        </NavLink>
                        </FormItem>
                    </form>
            }
            </div>
        );
    }
}

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username,email,password1, password2) =>
            dispatch (actions.authSignup(username,email,password1, password2))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (RegistrationForm)






