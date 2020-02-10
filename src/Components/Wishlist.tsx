import React, { Component } from "react";
import wishlistItems from "../wishlistItems";
import WishlistItem from "./WishlistItem";
import "../css/wishlist.css";
import "../css/mobile.css";

class Wishlist extends Component {
  state = {
    meta: {},
    data: [],
    renderOptions: {
      renderTablet: false,
      renderMobile: false
    }
  };
  wishlistItems: any[];

  constructor(props: any) {
    super(props);
    this.state = {
      meta: {},
      data: [],
      renderOptions: {
        renderTablet: false,
        renderMobile: false
      }
    };
    this.wishlistItems = wishlistItems;
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    this.handleWindowSizeChange();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    var width = window.innerWidth;
    var renderTablet = width <= 800;
    var renderMobile = width <= 400;
    this.setState({ renderOptions: { renderTablet, renderMobile } });
  };

  render() {
    var render = this.state.renderOptions;
    return (
      <div id="wishlistContainer">
        <h1>Cortney's Dope Wishlist</h1>
        <p>
          ★ = high priority <br></br>(otherwise, order doesn't matter)
        </p>
        {Object.keys(this.wishlistItems).map(key => (
          <WishlistItem
            key={key}
            index={key}
            details={this.wishlistItems[parseInt(key)]}
            renderOptions={render}
          />
        ))}
        <div className="last-updated">Last Updated: 02/10/2020</div>
      </div>
    );
  }
}

export default Wishlist;
