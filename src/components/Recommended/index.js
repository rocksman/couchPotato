import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import RecCard from '../RepeatedComp/RecCard';

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const TopGenres = styled.div`
    display: flex;
    flex: 1;
    flex-flow: row wrap;
`;
const Genre = styled.div`
    display: flex;
    flex: 1;
    background: rgb(41, 121, 255);
    max-height: 25px;
    color: #fff;
    margin: 5px;
    font-size: 16px;
    border-radius: 30px;
    padding: 5px 10px;
    font-weight: lighter;
    box-shadow: 0 2px 4px 0 rgba(41, 121, 255, 0.4);
`;
const GenreData = styled.div`
    flex: 10;
    width: 60vw;
    margin: auto;
    padding: 20px;
    /* display: flex; */
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 1.5em;
    letter-spacing: 2px;
    color: #444;
    font-weight: lighter;
    /* padding-left: 15vw; */
    margin-bottom: 5px;
`;
const Line = styled.div`
    height: 3px;
    width: 50px;
    /* margin-left: 15vw; */
    background: rgb(41, 121, 255);
    margin-bottom: 20px;
`;
const PlacehoalderText = styled.div`
    font-size: 1.5em;
    color: #aaa;
    letter-spacing: 2px;
    text-align: center;
`;

const Container = styled.div`
`;

class Recommended extends Component{
    // data = [[["21", 0.1390501856803894], "Get Shorty"], [["16", 0.0808616355061531], "Casino"], [["8", 0.07798755168914795], "Tom and Huck"], [["12", 0.06901732832193375], "Dracula: Dead and Loving It"], [["19", 0.0562848262488842], "Ace Ventura: When Nature Calls"], [["5", 0.04385846480727196], "Father of the Bride Part II"], [["2", 0.025962579995393753], "Jumanji"]];
    genres = ['Action', 'Crime', 'Comedy', 'Drama','Romance','Sci-Fi','Thriller'];
    state = {
        genre : ''
    }
    handleGenre = (genre) =>{
        this.props.getRecommend(genre);
        this.setState({genre: genre});
    }
    render(){
        return(
            <Wrapper>
                <TopGenres>
                    {
                        _.map(this.genres, (item)=>{
                            return(
                                <Genre onClick={()=>this.handleGenre(item)}>{item}</Genre>
                            )
                        })
                    }
                </TopGenres>
                <GenreData>
                    {this.props.recommendation.length>0?
                        <Container>
                            {console.log('true', this.props.recommendation)}
                            <Title>Recommended shows for {this.state.genre} </Title>
                            <Line/>
                            {
    
                                _.map(this.props.recommendation, (rec, i)=>{
                                    return(
                                        <RecCard details={rec} index={i}/>
                                    )
                                })
                            }
                        </Container>   
                        :
                        <Container>
                            <PlacehoalderText>Choose a genre to get a recommendation list</PlacehoalderText>
                        </Container>
                    }
                </GenreData>
            </Wrapper>
        )
    }
}

export default Recommended;