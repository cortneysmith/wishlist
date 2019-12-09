import React, { Component } from "react";
import wishlistItems from "../wishlistItems";
import WishlistItem from "./WishlistItem";
import "../css/wishlist.css";

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

  componentWillMount() {
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
    var pictureHeader;
    if (!render.renderTablet)
      pictureHeader = <div className="wishlist-header-col">Picture</div>;
    return (
      <div id="wishlistContainer">
        <h1>Cortney's Dope Wishlist</h1>
        <p>
          ★ = high priority <br></br>(otherwise, order doesn't matter)
        </p>
        <div className="wishlist-header-row">
          <div className="wishlist-header-col">★</div>
          <div className="wishlist-header-col">Name</div>
          {pictureHeader}
          <div className="wishlist-header-col">Link to Buy</div>
          <div className="wishlist-header-col">Price</div>
          <div className="wishlist-header-col">Details</div>
        </div>
        {Object.keys(this.wishlistItems).map(key => (
          <WishlistItem
            key={key}
            index={key}
            details={this.wishlistItems[parseInt(key)]}
            renderOptions={render}
          />
        ))}
        <div className="last-updated">Last Updated: 12/09/2019</div>
      </div>
    );
  }
}

export default Wishlist;
