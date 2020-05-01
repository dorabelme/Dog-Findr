import React, { Component } from "react";
import Navbar from './Navbar';
import Routes from './Routes';

import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import muffin from "./images/muffin.jpg";
import reno from "./images/reno.jpg";
import tomy from "./images/tomy.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
      {
        name: "Muffin",
        age: 1,
        src: muffin,
        facts: [
          "Muffin loves long walks.",
          "Muffin loves eating food.",
          "Muffin is well behaved."
        ]
      },
      {
        name: "Tomy",
        age: 1,
        src: tomy,
        facts: [
          "Tomy is a cute puppy.",
          "Tomy does not like being alone.",
          "Tomy loves playtime."
        ]
      },
      {
        name: "Reno",
        age: 4,
        src: reno,
        facts: [
          "Reno is really smart",
          "Reno loves the outdoors.",
          "Reno loves eating food."
        ]
      }
    ]
  };
  render() {

    return (

      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
