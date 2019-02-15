import React, { Component } from 'react';
// Absolute paths are not working with TS at the moment:
// https://github.com/facebook/create-react-app/issues/5692
// Update when above issue is resolved
import { Intro } from '../Intro';
import { Link } from 'react-router-dom';
import abp from '../../assets/abp.svg';
import personalImg from '../../assets/me-personal.png';
import personalUnderlay from '../../assets/personal-underlay.png';
import professionalImg from '../../assets/me-professional.png';
import professionalUnderlay from '../../assets/professional-underlay.png';
import classNames from 'classnames';
import css from './Home.module.scss';
import '../../assets/animations/bounce.scss';

export class Home extends Component<{}, {}> {
  render() {
    return (
      <div className={css.layout}>
        {/* TODO: Only animate on first load */}
        <div className={classNames(css.profile, css.personal, 'bounce-right')}>
          <Link to="/personal">
            <img src={personalImg} className={css.profilePhoto} />
          </Link>
          <img src={personalUnderlay} className={css.personalUnderlay} />
          <img src={abp} className={classNames(css.personalBg, 'fade-in')} />
        </div>

        <div className={classNames(css.profile, css.professional, 'bounce-left')}>
          <Link to="/professional">
            <img src={professionalImg} className={css.profilePhoto} />
          </Link>
          <img src={professionalUnderlay} className={css.profesionalUnderlay} />
        </div>

        <Intro />
      </div>
    );
  }
}