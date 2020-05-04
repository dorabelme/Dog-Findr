import React, { Component } from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class Routes extends Component {
    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
            return <DogDetails {...props} dog={currentDog} />
        };

        return (

            <Switch>
                <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs} />}></Route>
                <Route exact path='/dogs/:name' render={getDog}></Route>
                <Redirect to="/dogs" />
            </Switch>
        )
    }
}
