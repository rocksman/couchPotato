import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    border: none;
    background: rgb(41, 121, 255);
    color: #fff;
    border-radius: 30px;
    font-size: 1.2em;
    padding: 10px 15px;
    font-weight: lighter;
    width: 40%;
    text-align: center;
`;
export default class AuthButton extends Component{
    render(){
        return(
            <Wrapper onClick={this.props.func}>
                {this.props.title}
            </Wrapper>
        )
    }
}