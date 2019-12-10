import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faStar } from "@fortawesome/free-solid-svg-icons";

interface WishlistProperties extends React.Props<any> {
  index: any;
  details: any;
  renderOptions: { renderMobile: boolean; renderTablet: boolean };
}

class WishlistItem extends Component<WishlistProperties, any> {
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
      thumbURL: PropTypes.string,
      idea: PropTypes.bool
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
      thumbURL,
      idea
    } = this.props.details;

    var renderOptions = this.props.renderOptions;

    var classnames = require("classnames");
    var wishlistRowClass = classnames({
      "wishlist-row": true,
      "wishlist-row-idea": idea,
      "wishlist-row-default": !idea && !highPriority,
      "wishlist-row-highpriority": highPriority
    });

    var priority;
    if (highPriority) {
      priority = (
        <div className="wishlist-col wishlist-priority">
          {highPriority ? <FontAwesomeIcon icon={faStar} size="2x" /> : ""}
        </div>
      );
    }

    var itemImage;
    if (!renderOptions.renderTablet || renderOptions.renderMobile) {
      itemImage = (
        <div className="wishlist-col wishlist-img">
          <img src={thumbURL} alt={name} />
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

    // Render an Item Idea row ----------
    if (idea) {
      return (
        <div className={wishlistRowClass}>
          {priority}
          <div className="wishlist-col wishlist-idea">
            <FontAwesomeIcon icon={faLightbulb} size="2x" /> Idea
          </div>
          {itemName}
          {itemDetails}
        </div>
      );
    }
    // ----------------------------------

    // Continue reading properties and render the whole item (non-idea)
    var itemLink;
    itemLink = (
      <div className="wishlist-col wishlist-link">
        <a href={linkURL} target="_blank" rel="noopener noreferrer">
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
