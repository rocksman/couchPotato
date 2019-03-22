import React, { Component } from 'react';
import Recommended from '../components/Recommended'
import { connect } from 'react-redux';
import { getRecommend } from '../actions/asyncActions';

function mapDispatchToProps(dispatch) {
    return {
        getRecommend: (data) => dispatch(getRecommend(data))
    }
}
function mapStateToProps(state) {
    return {
        recommendation: state.recommendation
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);