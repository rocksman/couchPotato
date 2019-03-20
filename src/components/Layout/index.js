import React, { Component } from 'react';
import styled from 'styled-components';

import TopNav from './topNav';
import Footer from './footer'; 

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: #fafafa;
`;
const BodyContainer = styled.div`
    padding: 50px;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-self: center;
`;

class Layout extends Component{
    render(){
        return(
            <Wrapper>
                <TopNav/>
                <BodyContainer>
                    {this.props.children}
                </BodyContainer>
                <Footer/>
            </Wrapper>
        )
    }
}

export default Layout;