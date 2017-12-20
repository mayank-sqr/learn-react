/*
  This page simply copied and paste
  Need to understand whats going here  
*/

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class MenuComponent extends React.Component {
  constructor(props, context) {
   super(props, context);

   this.state = {
    active: false,
    itemList: []
   }
  }

  showHideDropdown(active) {
    this.setState({
      active: active
    }, () => {
    })
  }

  generateEntries(menu) {
    const listing = menu.listing || menu.listings || [];
    return listing.map(
      (entry, idx) => {
        if (entry.listings && entry.listings.length) {
          return (
            <div key={idx}>
              <Link to={entry.anchorLink} className="list-title">
                {entry.anchorText}
              </Link>
              {this.generateEntries(entry)}
            </div>
          )
        } else {
          return (
            <div key={idx}>
              <Link to={entry.anchorLink}>{entry.anchorText}</Link>
            </div>
          )
        }
      }
    )
  }

  getMenuTitle(item) {
    if (item.anchorLink) {
      return  <Link to={item.anchorLink} className="list-title">{item.label}</Link>
    }
  }

  render() {
    const menu = this.props.menu;
    const column = (12/menu.templatecolumn);
    let columnsizeclasses = classNames({
      'menu-dropdown': true,
      'margin-0': true,
      [`column-size-${menu.templatecolumn}`]: true
    })
    let dropdownclasses = classNames({
      'text-left': true,
      [`col-sm-${column}`]: true
    })
    let dropdown = menu.menus.map(
      (item, index) => {
        return (
          <div className={dropdownclasses} key={index}>
            {this.getMenuTitle(item)}

            {this.generateEntries(item)}
          </div>
        )
      }
    );

    let classes = classNames({
      active: this.state.active,
      'menu-item-container': true
    });
    return (
      <div className={classes}
        onMouseOver={
          (e) => this.showHideDropdown(true)
        }
        onMouseOut={
          () => this.showHideDropdown(false)
        }>
        <Link className="menu-link" to="#">{menu.label}</Link>
        <div className={columnsizeclasses}>
          {dropdown}
        </div>
      </div>
    );
  }
}

export default MenuComponent;
