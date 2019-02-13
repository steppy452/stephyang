import React, { Component, ReactNode } from 'react';
import css from './GalleryItem.module.scss';

interface GalleryItemProps {
  item: { path: string, caption: ReactNode }
}

export class GalleryItem extends Component<GalleryItemProps, {}> {
  render() {
    const { item } = this.props;

    return (
      <div className={css.galleryItem}>
        <img src={item.path} />

        <div className={css.caption}>
          {item.caption} 
        </div>
      </div>
    );
  }
}

// {item.icon ? <i className={item.icon}></i> : ''}