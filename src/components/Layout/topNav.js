import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { removeAuth } from '../../actions/syncActions';

const Wrapper = styled.div`
    padding: 6vh 50px;
    width: 100vw;
    background: #fafafa;
    display: flex;
    flex-direction: row;
`;
const LeftCont = styled.div`
    flex: 4;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;
const RightCont = styled.div`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`;
const NavItem = styled.div`
    flex: 1;
`;
const LoginButton = styled.div`
    background: rgb(41, 121, 255);
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    padding: 10px 20px;
    border-radius: 30px;
    width: 90px;
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
                    <NavItem>Couch Potato</NavItem>
                </LeftCont>
                <RightCont>
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