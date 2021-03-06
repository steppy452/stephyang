import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './BackHome.module.scss';

library.add(faArrowLeft);

export class BackHome extends Component<{}, {}> {
  render() {
    return (
      <Link to="/" className={css.backArrow}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className={css.backArrowText}> home</span>
      </Link>
    );
  }
}