import React, { Component } from "react";
import PropTypes from "prop-types";

interface WishlistProperties extends React.Props<any> {
  index: any;
  details: any;
  renderOptions: { renderMobile: boolean; renderTablet: boolean };
}

class WishlistItem extends React.Component<WishlistProperties, any> {
  key: any;
  index: any;
  details: any;
  renderMobile: any;

  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      linkName: PropTypes.string,
      linkURL: PropTypes.string,
      details: PropTypes.string,
      price: PropTypes.number,
      highPriority: PropTypes.bool,
      thumbURL: PropTypes.string
    })
  };

  constructor(props: any) {
    super(props);
    this.state = { meta: {}, data: [] };
  }

  render() {
    const {
      name,
      linkName,
      linkURL,
      details,
      price,
      highPriority,
      thumbURL
    } = this.props.details;

    var renderOptions = this.props.renderOptions;

    var classnames = require("classnames");
    var wishlistRowClass = classnames({
      "wishlist-row": true,
      "wishlist-highpriority": highPriority
    });

    var priority;
    if (
      !renderOptions.renderMobile ||
      (renderOptions.renderMobile && highPriority)
    ) {
      priority = (
        <div className="wishlist-col wishlist-priority">
          {highPriority ? "★" : ""}
        </div>
      );
    }

    var itemImage;
    if (!renderOptions.renderTablet || renderOptions.renderMobile) {
      itemImage = (
        <div className="wishlist-col wishlist-img">
          <a href={linkURL} target="_blank">
            <img src={thumbURL} alt={name} />
          </a>
        </div>
      );
    }

    var itemName = <div className="wishlist-col wishlist-name">{name}</div>;
    if (renderOptions.renderMobile) {
      itemName = (
        <div className="wishlist-col wishlist-name">
          <h3>{name}</h3>
        </div>
      );
    }
    var itemDetails;
    if (!(details === "" && renderOptions.renderMobile)) {
      itemDetails = (
        <div className="wishlist-col wishlist-details">{details}</div>
      );
    }

    var itemLink;
    itemLink = (
      <div className="wishlist-col wishlist-link">
        <a href={linkURL} target="_blank">
          {linkName}
        </a>
      </div>
    );

    var itemPrice;

    itemPrice = (
      <div className="wishlist-col wishlist-price">{"$" + price}</div>
    );

    var itemLinkAndPrice;
    if (renderOptions.renderMobile) {
      itemLinkAndPrice = (
        <div className="item-inner-grid">
          {itemLink} {itemPrice}
        </div>
      );
    }

    return (
      <div className={wishlistRowClass}>
        {priority}
        {itemName}
        {itemImage}
        {itemLinkAndPrice}
        {itemLink}
        {itemPrice}
        {itemDetails}
      </div>
    );
  }
}

export default WishlistItem;
