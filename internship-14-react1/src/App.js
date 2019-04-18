import React, { Component } from "react";
import Grocery from "./components/Grocery";
import GroceriesList from "./constants/GroceriesList";
import Basket from "./components/Basket";
import "./components/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketList: [{ name: "", quantity: 1, isStriked: false }]
    };
  }
  handleGroceryAdd = grocery => {
    grocery.quantity = grocery.quantity + 1;
    var groceryListToEdit = this.state.basketList.concat(grocery);
    groceryListToEdit.forEach(function(groceryItem, index) {
      if (groceryItem.name === grocery.name) groceryListToEdit[index] = grocery;
    });

    var filter = function(value, index) {
      return this.indexOf(value) === index;
    };

    groceryListToEdit = groceryListToEdit.filter(filter, groceryListToEdit);

    this.setState({
      basketList: groceryListToEdit
    });
  };
  handleGroceryStrike = (event, grocery) => {
    grocery.isStriked = true;
    event.currentTarget.style.textDecoration = "line-through";
    event.stopPropagation();
  };
  handleGroceryRemove = (event, grocery) => {
    grocery.quantity = grocery.quantity - 1;
    var groceryListToDelete = this.state.basketList;
    if (grocery.quantity === 0) {
      groceryListToDelete.forEach(function(groceryItem, index) {
        if (groceryItem.name === grocery.name) {
          groceryListToDelete.splice(index, 1);
        }
      });
      this.setState({
        basketList: groceryListToDelete
      });
    } else {
      var groceryListToEdit = this.state.basketList.concat(grocery);
      groceryListToEdit.forEach(function(groceryItem, index) {
        if (groceryItem.name === grocery.name) {
          groceryListToEdit[index] = grocery;
        }
      });
      var filter = function(value, index) {
        return this.indexOf(value) === index;
      };
      groceryListToEdit = groceryListToEdit.filter(filter, groceryListToEdit);
      this.setState({
        basketList: groceryListToEdit
      });
      event.stopPropagation();
    }
  };
  componentDidMount() {
    var list = this.state.basketList;
    list.shift();
    this.setState({
      basketList: list
    });
  }

  render() {
    var groceryList = GroceriesList.map((grocery, index) => (
      <div key={index}>
        <Grocery
          name={grocery.name}
          quantity={grocery.quantity}
          handleGroceryClick={() => this.handleGroceryAdd(grocery)}
        />
      </div>
    ));
    var basketList = this.state.basketList.map((grocery, index) => (
      <div key={index}>
        <Basket
          name={grocery.name}
          quantity={grocery.quantity}
          handleGroceryStrike={e => this.handleGroceryStrike(e, grocery)}
          isStriked={false}
          handleGroceryRemove={e => this.handleGroceryRemove(e, grocery)}
        />
      </div>
    ));

    return (
      <>
        <h1>Groceries</h1>
        <div>{groceryList}</div>
        <h1>Basket</h1>
        <div>{basketList}</div>
      </>
    );
  }
}

export default App;
