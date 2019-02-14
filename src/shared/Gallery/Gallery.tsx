import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import css from './Gallery.module.scss';

interface GalleryProps {
  className?: any;
  children?: ReactNode;
}

export class Gallery extends Component<GalleryProps, {}> {
  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames(css.gallery, className)}>
        {children}
      </div>
    );
  }
}