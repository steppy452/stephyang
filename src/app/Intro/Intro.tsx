import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Intro.module.scss';

library.add(faEnvelope);

export class Intro extends Component<{}, {}> {
  render() {
    const mailToLink = 'mailto:sayhello@stephyang.com';

    return(
      <Fragment>
        <div className={css.introText}>
          STEPHANIE<span className={css.highlight}>YANG</span>
        </div>
  
        <div className={css.sayhelloEmail}>
          <FontAwesomeIcon icon="envelope" />&nbsp;
          <a href={mailToLink}>sayhello@stephyang.com</a>
        </div>
      </Fragment>
    )
  }
}
