import React, {Component,Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import {Layout, Menu, Breadcrumb, Button} from 'antd';
import * as actions from "../store/actions/auth";

const {Header, Content, Footer} = Layout;


class CustomLayout extends Component {


    render () {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to='/'> Posts</Link>
                        </Menu.Item>
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="4">
                                    <Button to='/' onClick={this.props.logout}> Logout</Button>
                                </Menu.Item>
                                :
                                    <Menu.Item key="2">
                                        <Link to='/login'>Login</Link>
                                    </Menu.Item>

                        }


                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () =>
            dispatch (actions.logout ())
    }
}

export default withRouter (connect (null, mapDispatchToProps) (CustomLayout));

