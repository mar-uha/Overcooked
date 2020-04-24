import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = { recipes: [], loading: true };

        // This binding is necessary to make "this" work in the callback  
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.populateRecipesData();
    }

    // Handle Delete request for a recipe
    handleDelete = (id) => {
        if (!window.confirm(`Do you want to delete recipe with Id: ${id}`))
            return;
        else {
            fetch(`api/v1/recipe/${id}`, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        recipes: this.state.recipes.filter((rec) => {
                            return (rec.id !== id);
                        })
                    });
            });
        }
    }

    handleEdit = (id) => {
        this.props.history.push(`/recipe/edit/${id}`);
    }  

    renderRecipesTable(recipes) {
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.title}</td>
                            <td>{recipe.rating}</td>
                            <td>{recipe.price}</td>
                            <td>{recipe.numberOfPeople}</td>
                            <td>{recipe.preparationTime}</td>
                            <td>{recipe.cookingTime}</td>
                            <td>{recipe.dishType}</td>
                            <td>{recipe.difficulty}</td>
                            <td>
                                <button onClick={(id) => this.handleEdit(recipe.id)}>Edit</button>
                                <button onClick={(id) => this.handleDelete(recipe.id)}>Delete</button>
                            </td>  
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderRecipesTable(this.state.recipes);

        return (
            <div>
                <h1 id="tabelLabel">Recipes</h1>
                <Link to="/recipe/add">Add a new excellent recipe</Link>  
                {contents}
            </div>
        );
    }

    async populateRecipesData() {
        const response = await fetch('api/v1/recipe');
        const data = await response.json();
        this.setState({ recipes: data, loading: false });
    }
}
