import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchResult } from '../actions/asyncActions';
import Home from '../components/Home'


function mapDispatchToProps(dispatch) {
    return {
        getSearch: (term) => dispatch(getSearchResult(term))
    }
}
function mapStateToProps(state) {
    return {
        search: state.search
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);