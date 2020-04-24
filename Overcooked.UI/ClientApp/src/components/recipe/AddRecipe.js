import React, { Component } from 'react';

export class AddRecipe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            loading: true,
            recipe: null
        };

        const recipeId = this.props.match.params["id"];
        // This will set state for Edit recipe  
        if (recipeId > 0) {
            fetch(`api/v1/recipe/${recipeId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({ title: "Edit", loading: false, recipe: data });
                });
        }
        // This will set state for Add recipe  
        else {
            this.state = {
                title: "Create",
                loading: false,
                recipe: {
                    title: '',
                    rating: null,
                    price: null,
                    numberOfPeople: 1,
                    preparationTime: null,
                    cookingTime: null,
                    DishType: 0,
                    difficulty: null
                }
            };
        }

        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    // This will handle the submit form event.  
    handleSave = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit recipe.  
        if (this.state.recipe.id) {
            fetch('api/v1/recipe', {
                method: 'PUT',
                body: data
            }).then((response) => response.json())
              .then((responseJson) => {
                  this.props.history.push("/recipe");
              })
        }
        // POST request for Add a recipe.
        else {
            fetch('api/v1/recipe', {
                method: 'POST',
                body: data
            }).then((response) => response.json())
              .then((responseJson) => {
                  this.props.history.push("/recipe");
              })
        }
    }

    // This will handle Cancel button click event.
    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push("/recipe");
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Recipe</h3>
                <hr />
                {contents}
            </div>
        );
    }

    // Returns the HTML Form to the render() method.
    renderCreateForm() {
        return (
            <form onSubmit={this.handleSave}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.recipe.id} />
                </div>
                {/* Title */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="Title">Title</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="title" defaultValue={this.state.recipe.title} required />
                    </div>
                </div>

                {/* Rating */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="Rating">Rating</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="5" name="rating" defaultValue={this.state.recipe.rating} />
                    </div>
                </div>

                {/* Price */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="Price">Price</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" name="price" defaultValue={this.state.recipe.price} />
                    </div>
                </div>

                {/* Number of people */}
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="NumberOfPeople">Number of people</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="12" name="numberOfPeople" defaultValue={this.state.recipe.numberOfPeople} />
                    </div>
                </div>

                {/* Preparation time */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="PreparationTime">Preparation time</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="240" name="preparationTime" defaultValue={this.state.recipe.preparationTime} />
                    </div>
                </div>

                {/* Cooking time */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="CookingTime">Cooking time</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="240" name="cookingTime" defaultValue={this.state.recipe.cookingTime} />
                    </div>
                </div>

                {/* Dish type */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="DishType">Dish type</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="dishType" defaultValue={this.state.recipe.dishType} required>
                            <option value="">-- Select DishType --</option>
                            <option value="0">Starter</option>
                            <option value="1">MainCourse</option>
                            <option value="2">Dessert</option>
                        </select>
                    </div>
                </div>

                {/* Difficulty */}
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="Difficulty">Difficulty</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="5" name="difficulty" defaultValue={this.state.recipe.difficulty} />
                    </div>
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}
