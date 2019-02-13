import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './header.module.scss';

@connect(null, null, null, {pure: false})
class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.headingIndicatorBtn}>
          <span>Connected</span><span /></div>
          <NavLink className={style.headerLink} to='/login'>Log in</NavLink>
          <NavLink className={style.headerLink} to='/sign-up'>Sign-up</NavLink>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
