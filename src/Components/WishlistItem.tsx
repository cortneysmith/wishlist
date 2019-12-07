import React, { Component } from "react";
import PropTypes from "prop-types";

interface WishlistProperties extends React.Props<any> {
  index: any;
  details: any;
  renderMobile: boolean;
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

    var renderMobile = this.props.renderMobile;

    var classnames = require("classnames");
    var wishlistRowClass = classnames({
      "wishlist-row": true,
      "wishlist-highpriority": highPriority
    });

    var imageTag;
    if (!renderMobile) {
      imageTag = (
        <div className="wishlist-col wishlist-img">
          <img src={thumbURL} alt={name} />
        </div>
      );
    }
    return (
      <div className={wishlistRowClass}>
        <div className="wishlist-col wishlist-priority">
          {highPriority ? "★" : ""}
        </div>
        {imageTag}
        <div className="wishlist-col wishlist-name">{name}</div>
        <div className="wishlist-col wishlist-link">
          <a href={linkURL} target="_blank">
            {linkName}
          </a>
        </div>
        <div className="wishlist-col wishlist-price">{"$" + price}</div>
        <div className="wishlist-col wishlist-details">{details}</div>
      </div>
    );
  }
}

export default WishlistItem;
