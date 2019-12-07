import React, { Component } from "react";
import wishlistItems from "../wishlistItems";
import WishlistItem from "./WishlistItem";
import "../css/wishlist.css";

class Wishlist extends Component {
  state = {
    meta: {},
    data: [],
    renderMobile: false
  };
  wishlistItems: any[];

  constructor(props: any) {
    super(props);
    this.state = { meta: {}, data: [], renderMobile: false };
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
    var renderMobile = width <= 800;
    this.setState({ renderMobile });
  };

  render() {
    var pictureHeader;
    if (!this.state.renderMobile)
      pictureHeader = <div className="wishlist-header-col">Picture</div>;
    return (
      <div id="wishlistContainer">
        <h1>Cortney's Dope Wishlist</h1>
        <p>(in no particular order; high priority items are starred!)</p>
        <div className="wishlist-header-row">
          <div className="wishlist-header-col">★</div>
          {pictureHeader}
          <div className="wishlist-header-col">Name</div>
          <div className="wishlist-header-col">Link to Buy</div>
          <div className="wishlist-header-col">Price</div>
          <div className="wishlist-header-col">Details</div>
        </div>
        {Object.keys(this.wishlistItems).map(key => (
          <WishlistItem
            key={key}
            index={key}
            details={this.wishlistItems[parseInt(key)]}
            renderMobile={this.state.renderMobile}
          />
        ))}
      </div>
    );
  }
}

export default Wishlist;
