import React, { Component } from 'react';
import Register from '../components/Register';
import { connect } from 'react-redux';
import { tryRegister } from '../actions/asyncActions';

function mapDispatchToProps(dispatch) {
    return {
        tryRegister: (data) => dispatch(tryRegister(data))
    }
}
function mapStateToProps(state) {
    return {
        register: state.user.registered
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);