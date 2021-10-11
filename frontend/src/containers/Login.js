import {Form, Input, Button, Spin} from 'antd';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import Icon from "antd/es/icon";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import * as actions from '../store/actions/auth'


const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>
const FormItem = Form.Item

class NormalLoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault ()
        console.log ('submiited')
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        console.log ('Received values of form:', username, password)
        if (username, password) {
            this.props.onAuth (username, password)
            // this.props.history.push ('/')
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
                                name="password"
                                rules={[{required: true, message: 'Please input your Password!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <FormItem>
                                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                                    Log in
                                </Button>
                                Or <NavLink
                                style={{marginRight: '10px'}} to='/signup/'> signup
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
        onAuth: (username, password) =>
            dispatch (actions.authLogin(username, password))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (NormalLoginForm)






