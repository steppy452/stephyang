import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import css from './Intro.module.scss';
import '../../assets/animations/fade.scss';

library.add(faEnvelope);

interface IntroProps {
  fadeIn: boolean;
}

export class Intro extends Component<IntroProps, {}> {
  static defaultProps = {
    fadeIn: true
  };

  render() {
    const { fadeIn } = this.props;
    const mailToLink = 'mailto:sayhello@stephyang.com';

    return (
      <div className={classNames(
        css.intro,
        fadeIn ? 'fade-in' : ''
      )}>
        <div className={css.introText}>
          <Link to="/">
            STEPHANIE<span className={css.highlight}>YANG</span>
          </Link>
        </div>

        <div className={css.sayhelloEmail}>
          <FontAwesomeIcon icon="envelope" />&nbsp;
          <a href={mailToLink}>sayhello@stephyang.com</a>
        </div>
      </div>
    )
  }
}
