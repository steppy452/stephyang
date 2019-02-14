import React, { Component, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import css from './GalleryItem.module.scss';

interface GalleryItemProps {
  item: { path: string, caption: ReactNode, icon?: IconDefinition | null }
}

export class GalleryItem extends Component<GalleryItemProps, {}> {
  render() {
    const { item } = this.props;

    return (
      <div className={css.galleryItem}>
        <img src={item.path} className={css.image} />

        <div className={css.caption}>
          {item.caption}&nbsp;
          {item.icon && <FontAwesomeIcon icon={item.icon} />}
        </div>
      </div>
    );
  }
}