import React, { Component } from 'react';
import styled from 'styled-components';
import AuthButton from '../RepeatedComp/AuthButton';
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    width: 50vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 1.5em;
    color: #444;
    flex: 1;
    max-height: 40px;
    margin-bottom: 30px;
    text-align: left;
    width: 40%;
`;
const CustInput = styled.input`
    background: #ddd;
    width: 40%;
    border: none;
    font-weight: lighter;
    font-size: 1.2em;
    border-radius: 30px;
    padding: 10px 20px;
    flex: 0.2;
    margin-bottom: 20px;
`;
const RegisterLink = styled.a`
    font-size: 12px;
    color: rgba(41, 121, 255,1);
    text-decoration: none;
    padding-top: 20px;
`;
class Login extends Component{
    state = {
        email : '',
        password : ''
    }
    render(){
        console.log(this.props.auth);
        if(this.props.auth){
            this.props.history.push('/home');
        }
        return(
            <Wrapper>
                <Title>Login</Title>
                <CustInput 
                    placeholder={'email'} 
                    type="email" 
                    value={this.state.email} 
                    onChange={(e)=>this.setState({email: e.target.value})}
                />
                <CustInput 
                    placeholder={'password'} 
                    type="password"
                    value={this.state.password} 
                    onChange={(e)=>this.setState({password: e.target.value})}
                />
                <AuthButton title={'login'} func={()=>this.props.tryLogin(this.state)}/>
                <NavLink to='/auth/register' style={{textDecoration: 'none'}}>
                    <RegisterLink>Not a user? Register now</RegisterLink>
                </NavLink>
            </Wrapper>
        )
    }
}
export default Login;