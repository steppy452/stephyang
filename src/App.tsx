import React, { Component } from 'react';
import { Intro } from './app/Intro';
import abp from './assets/abp.svg';
import personalUnderlay from './assets/personal-underlay.png';
import professionalUnderlay from './assets/professional-underlay.png';
import personalImg from './assets/me-personal.png';
import professionalImg from './assets/me-professional.png';
import classNames from 'classnames';
import css from './App.module.scss';
// do this better
import './assets/animations/bounce.scss';

class App extends Component {
  render() {
    return (
      <div className={css.layout}>
        <div className={classNames(css.profile, css.personal, 'bounce-right')}>
          {/* <Link prefetch href="/personal"> */}
          <img src={personalImg} className={css.profilePhoto} />
          {/* </Link> */}
          <img src={personalUnderlay} className={css.personalUnderlay} />
          <img src={abp} className={classNames(css.personalBg, 'fade-in')} />
        </div>

        <div className={classNames(css.profile, css.professional, 'bounce-left')}>
          {/* <Link prefetch href="/professional"> */}
          <img src={professionalImg} className={css.profilePhoto} />
          {/* </Link> */}
          <img src={professionalUnderlay} className={css.profesionalUnderlay} />
        </div>

        <div className={classNames(css.intro, 'fade-in')}>
          <Intro />
        </div>
      </div>
    );
  }
}

export default App;
