import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    width: 60%;
    min-height: 100px;
    margin-bottom: 10px;
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4); */
    padding: 10px;
    /* border-radius: 5px; */
    border-bottom: 1px solid #ccc;
`;
const NumberCont = styled.div`
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #ddd;
    color: #888;
    font-size: 25px;
    padding: 35px 10px;
    text-align: center;
`;
const DetailsCont = styled.div`
    flex: 4;
    padding: 10px;
    flex-direction: column;
`;
const MovGenres = styled.div`
    flex: 0.3;
    flex-direction: row;
`;
const MovTitle = styled.div`
    flex: 1;
    font-size:1.2em;
    font-weight: 300;
    margin-bottom: 5px;
`;
const MovGenre = styled.div`
    flex: 1;
    font-size: 0.8em;
    padding: 10px 5px;
    background: #ddd;
    border-radius: 10px;
    font-weight: bolder;
`;
const MovDesc = styled.p`
    flex: 2;
    color: #666;
    font-size: 0.9em;
`;
export default class MovieCard extends Component{
    state= {
        match : Math.round(this.props.details[0][1]*10000)/100
    }
    render(){
        const {match} = this.state;
        return(
            <Wrapper>
                <NumberCont>
                    {this.props.index + 1} 
                </NumberCont>
                <DetailsCont>
                    <MovTitle>{this.props.details[1]}</MovTitle>
                    <MovDesc>{match>100? 98.5: match}% match</MovDesc>
                </DetailsCont>
            </Wrapper>
        )
    }
}