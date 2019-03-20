import React, { Component } from 'react';
import styled from 'styled-components';
import AuthButton from '../RepeatedComp/AuthButton';
const Wrapper = styled.div`
    width: 50vw;
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
    margin-bottom: 40px;
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
    padding: 15px 20px;
    flex: 0.1;
    margin-bottom: 20px;
`;
class Register extends Component{
    state =  {
        name: '',
        email: '',
        password: '',
        password2: ''
    }
    render(){
        console.log('reg', this.props.register);
        if(this.props.register)
            this.props.history.push('/auth/login');
        return(
            <Wrapper>
                <Title>Register</Title>
                <CustInput placeholder={'username'} value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                <CustInput placeholder={'email'} type="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                <CustInput placeholder={'password'} type="password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})}/>
                <CustInput placeholder={'confirm password'} type="password" value={this.state.password2} onChange={(e)=>this.setState({password2: e.target.value})}/>
                <AuthButton title={'register'} func={()=>this.props.tryRegister(this.state)}/>
            </Wrapper>
        )
    }
}
export default Register;