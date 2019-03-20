import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import MovieCard from '../RepeatedComp/movieCard';

const Wrapper = styled.div``;
const TopContainer = styled.div`
    min-height: 60vh;
    margin: auto;
`;
const BottomContainer = styled.div`
    min-height: 50vh;
`;
const TagLine = styled.p`
    font-weight: lighter;
    font-size: 2.5em;
    text-align: center;
`;
const SearchBar = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    width: 60vw;
    padding : 15px 40px;
    border: none;
    border-radius: 30px;
    background: #eee;
    box-shadow: 0 1.5px 3px 0 rgba(200,200,200,0.6);
`;
const SearchText = styled.input`
    flex:20;
    color: #444;
    font-size: 1.5em;
    border: none;
    background: rgba(0,0,0,0);
    align-items: flex-start;
    align-items: flex-start;
`;
const SumbitIcon = styled.button`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    border: none;
    color: #777;
    font-size: 2em;
    background: rgba(0,0,0,0);
`;
const SearchTitle = styled.h1`
    font-size: 1.5em;
    letter-spacing: 2px;
    color: #444;
    font-weight: lighter;
    padding-left: 15vw;
    margin-bottom: 5px;
`;
const Line = styled.div`
    height: 3px;
    width: 50px;
    margin-left: 15vw;
    background: rgb(41, 121, 255);
    margin-bottom: 20px;
`;

class Home extends Component {
    state = {
        term: ''
    }
    render() {
        console.log('jenny', this.props.search);
        return (
            <Wrapper>
                <TopContainer>
                    <TagLine>Let us help you be a <span style={{ fontWeight: 'bold', textDecoration: 'dotted' }}>Couch Potato</span></TagLine>
                    <SearchBar>
                        <SearchText
                            placeholder="Start searching..."
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                        <SumbitIcon type="submit" onClick={() => this.props.getSearch(this.state.term)}>
                            <i className="material-icons">send</i>
                        </SumbitIcon>
                    </SearchBar>
                </TopContainer>
                {Object.keys(this.props.search).length > 0 &&
                    <BottomContainer>
                        {
                            Object.keys(this.props.search)
                                .map(key => (
                                    _.map(this.props.search[key], (item, index) => {
                                        console.log('ron', item);
                                        return (
                                            <>
                                                <SearchTitle>Search results for {key}:</SearchTitle>
                                                <Line/>
                                                {
                                                    _.map(item, item1 => {
                                                        console.log('derick', item1);
                                                        return (
                                                            <MovieCard details={item1}/>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    })
                                ))
                        }
                    </BottomContainer>
                }
            </Wrapper>
        )
    }
}

export default Home;