import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Recipe } from './components/recipe/Recipe';
import { AddRecipe } from './components/recipe/AddRecipe';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/recipe' component={Recipe} />
                <Route path='/addrecipe' component={AddRecipe} />
            </Layout>
        );
    }
}
