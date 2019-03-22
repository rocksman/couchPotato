import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { removeAuth } from '../../actions/syncActions';

const Wrapper = styled.div`
    /* margin: 6vh 50px; */
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100vw;
    background: #fafafa;
    display: flex;
    flex-direction: row;
`;
const LeftCont = styled.div`
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;
const RightCont = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;
const NavItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.div`
    color: rgba(41, 121, 255,0.6);
    font-weight: lighter;
    font-size: 1.5em;
`;
const LoginButton = styled.div`
    background: rgb(41, 121, 255);
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    padding: 10px 20px;
    border-radius: 30px;
    width: 90px;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 2px 4px 0 rgba(41, 121, 255, 0.4);
`;

class TopNav extends Component {
    authHandler = () => {
        if (this.props.auth) {
            this.props.removeAuth();
        }
    }
    render() {
        return (
            <Wrapper>
                <LeftCont>
                    <NavItem>
                        <NavLink to="/home" style={{textDecoration: 'none'}}>
                            <Logo>Couch<span style={{fontWeight: 'bold', color: '#5689de'}}>Potato</span></Logo>
                        </NavLink>
                    </NavItem>
                </LeftCont>
                <RightCont>
                    <NavItem style={{alignItems: 'flex-end', justifyContent:'flex-end', padding: '10px'}}>
                        <NavLink to="/recommended" style={{textDecoration: 'none', color: 'rgb(41, 121, 255)'}}>
                            Recommended
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        {this.props.auth ?
                            <LoginButton onClick={this.authHandler}>
                                Logout
                            </LoginButton>
                            :
                            <NavLink to="/auth" style={{textDecoration: 'none'}}>
                                <LoginButton>
                                    Login / Sign up
                                </LoginButton>
                            </NavLink>
                        }
                    </NavItem>
                </RightCont>
            </Wrapper>
        )
    }
}

function mapDispatchToProps(disptach) {
    return {
        removeAuth: () => disptach(removeAuth())
    }
}
function mapStateToProps(state) {
    return {
        auth: state.user.authenticated
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNav);