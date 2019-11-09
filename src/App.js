import React, { Component } from "react";
import Cards from "./Components/Cards";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import cards from "./cards.json";



class App extends Component {
    state = {
        cards,
        message: "Click an image to begin!",
        score: 0,
        topscore: 0
      };

    // handleClickEvent = (event) => {
    //   const orderChange = this.state.image;

    //   if (event.click) {
    //     orderChange
    //   }
    // }
    
      render() {
        return (
          <Wrapper>
            <Nav></Nav>
            <Header></Header>
            {this.state.cards.map(cards => (
              <Cards
              id={cards.id}
              image={cards.image}
              click={cards.click}
              />
            ))}
            <Footer></Footer>
          </Wrapper>
        )
      }
}
export default App;

