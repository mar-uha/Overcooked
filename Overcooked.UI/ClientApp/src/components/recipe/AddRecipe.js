import React, { Component } from 'react';

export class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Create",
            loading: false,
            recipe: {
                title: '',
                note: null,
                price: null,
                numberOfPeople: 1,
                preparationTime: null,
                cookingTime: null,
                DishType: 0,
                difficulty: null
            }
        };

        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    // This will handle the submit form event.  
    handleSave = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        // POST request for Add a recipe.  
        fetch('api/v1/recipe', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/recipe");
            })
    }

    // This will handle Cancel button click event.
    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push("/recipe");
    }

    render() {
        return (
            <form onSubmit={this.handleSave}>
                <div className="form-group row">
                    <input type="hidden" name="recipeId" value={this.state.recipe.id} />
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
                    <label className=" control-label col-md-12" htmlFor="Note">Rating</label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="5" name="note" defaultValue={this.state.recipe.note} />
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
