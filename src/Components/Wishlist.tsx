import React, { Component } from "react";
import wishlistItems from "../wishlistItems";
import WishlistItem from "./WishlistItem";
import "../css/wishlist.css";

class Wishlist extends Component {
  wishlistItems: any[];

  constructor(props: any) {
    super(props);
    this.state = { meta: {}, data: [] };
    this.wishlistItems = wishlistItems;
  }

  render() {
    return (
      <div id="wishlistContainer">
        <h1>My Dope Wishlist</h1>
        <div className="wishlist-header-row">
          <div className="wishlist-header-col"></div>
          <div className="wishlist-header-col">Picture</div>
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
              />
            ))}
      </div>
    );
  }
}

export default Wishlist;