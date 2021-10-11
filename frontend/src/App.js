import React from 'react';
import CustomLayout from './components/Layout'
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from "./routes";
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'



class App extends React.Component {
    componentDidMount () {
        this.props.onTryAutoSignUp ()
    }

    render () {
    return (
        <div >
            <Router>
                <CustomLayout {...this.props}>
                    <BaseRouter/>
                </CustomLayout>
            </Router>
        </div>
    );
    }
}

const mapStateToProps = state =>{
    return {
        isAuthenticated:state.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
