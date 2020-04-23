import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = { recipes: [], loading: true };
    }

    componentDidMount() {
        this.populateRecipesData();
    }

    static renderRecipesTable(recipes) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Number of people</th>
                        <th>Preparation time</th>
                        <th>Cooking time</th>
                        <th>Dish type</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.title}</td>
                            <td>{recipe.note}</td>
                            <td>{recipe.price}</td>
                            <td>{recipe.numberOfPeople}</td>
                            <td>{recipe.preparationTime}</td>
                            <td>{recipe.cookingTime}</td>
                            <td>{recipe.dishType}</td>
                            <td>{recipe.difficulty}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Recipe.renderRecipesTable(this.state.recipes);

        return (
            <div>
                <h1 id="tabelLabel">Recipes</h1>
                <Link to="/addrecipe">Create a new excellent recipe</Link>  
                {contents}
            </div>
        );
    }

    async populateRecipesData() {
        const response = await fetch('api/v1/Recipe');
        const data = await response.json();
        this.setState({ recipes: data, loading: false });
    }
}
