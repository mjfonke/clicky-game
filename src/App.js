import React, { Component } from "react";
import Cards from "./Components/Cards";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import cards from "./cards.json";
// import * as Animatable from "react-native-animatable";

class App extends Component {

    state = {
        cards,
        message: "",
        click: [],
        score: 0,
        topScore: 0,
        animation: false
      };

      shuffleData = data => {
        let i = data.length - 1;
        while ( i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
      }

      componentDidMount =() => {
        this.setState({message: "Click an image to begin!"})
      }

      resetData = data => {
        const resetData = data.map(item => ({ ...item}));
        return this.shuffleData(resetData);
      };

   
      handleImgClick = (id) => {
        const shuffleArr = this.shuffleData(cards);
        this.setState({cards: shuffleArr});
        if(!this.state.click.includes(id)) {
          this.state.click.push(id)
          const { topScore, score } = this.state;
          let newScore = score + 1;
          const newTopScore = newScore > topScore ? newScore : topScore;
          this.setState(()=> ({
            score: newScore,
            topScore: newTopScore,
            message: "You guessed correctly"
          }));
          if (newScore === 12) {
            this.setState({
              score: 0,
              message: "You Won!!! Click an image to start",
              click: []
            })
          }
        } else {
          this.setState({
            score: 0,
            message: "Incorrect! GAME OVER!! Try again!",
            click: []
            // cards: this.resetData(cards)
          })
        }
      }
    
      render() {
        return (
          <div>
            <Nav
            message = {this.state.message}
            score = {this.state.score}
            topScore = {this.state.topScore}
            />
            <Header/>
            <Wrapper>
            {this.state.cards.map(cards => (
              <Cards
              handleImgClick={this.handleImgClick}
              key={cards.id}
              id={cards.id}
              image={cards.image}
              click={cards.click}
              />
            ))}
            </Wrapper>
            <Footer/>
          </div>
        )
      }
}
export default App;

