import React, { Component, ReactNode } from 'react';
import css from './Gallery.module.scss';

interface GalleryProps {
  children?: ReactNode;
}

export class Gallery extends Component<GalleryProps, {}> {
  render() {
    return (
      <div className={css.gallery}>
        {this.props.children}
      </div>
    );
  }
}