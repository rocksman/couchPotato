import React, { Component } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { tryLogin } from '../actions/asyncActions';

function mapDispatchToProps(dispatch) {
    return {
        tryLogin: (data) => dispatch(tryLogin(data))
    }
}
function mapStateToProps(state) {
    return {
        auth: state.user.authenticated
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);