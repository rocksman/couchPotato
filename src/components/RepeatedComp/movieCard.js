import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    width: 60%;
    min-height: 200px;
    margin-bottom: 10px;
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4); */
    padding: 10px;
    /* border-radius: 5px; */
    border-bottom: 1px solid #ccc;
`;
const ImageCont = styled.div`
    height: 100%;
    flex: 1;
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
    render(){
        return(
            <Wrapper>
                <ImageCont>
                    <img src={this.props.details.Image} style={{maxHeight: '100%', maxWidth: '100%'}}/>
                </ImageCont>
                <DetailsCont>
                    <MovTitle>{this.props.details.Title}</MovTitle>
                    <MovGenres>
                        {_.map(this.props.details.Genres, (item,i)=>{
                            return(
                                <MovGenre>{item}</MovGenre>
                            )
                        })}
                    </MovGenres>
                    <MovDesc>{this.props.details.Desc}</MovDesc>
                </DetailsCont>
            </Wrapper>
        )
    }
}