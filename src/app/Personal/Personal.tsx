import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
// Absolute paths are not working with TS at the moment:
// https://github.com/facebook/create-react-app/issues/5692
// Update when above issue is resolved
import { BackHome } from '../BackHome/BackHome';
import { Intro } from '../Intro';
import { Gallery as data } from '../Data/';
import { Gallery, GalleryItem } from '../../shared/Gallery';
import css from './Personal.module.scss';

export class Personal extends Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Offduty | Stephanie Yang</title>
        </Helmet>
        <div className={css.subLayout}>
          <div className={css.contentWrapper}>
            <div className={css.subLayoutContent}>
              <BackHome></BackHome>

              <h1>Offduty</h1>
              <p>
                When I'm off work, I love to keep busy learning new life skills and enjoying time with my little pup, Toffee. You'll often find me at Austin Bouldering Project pushing myself on new and challenging routes. Otherwise, I enjoying working with my hands and have recently picked up woodworking as a hobby. My recent "I should do that" moment is building a tiny home in the near future, or maybe a workshop in my backyard.
              </p>
              <p>
                In the mean time, I'm trying to furnish the rest of my house without having to buy more pre-fabricated pieces. If you can't find me in Austin, I'm probably off traveling the world, finding as many places as I can to scuba dive :)
              </p>

              <Gallery className={css.photoGallery}>
                {
                  data.map((item, idx) => {
                    const galleryItem = {
                      path: item.src,
                      caption: item.caption,
                      icon: item.icon ? item.icon : null
                    };

                    return <GalleryItem key={idx} item={galleryItem}></GalleryItem>
                  })
                }
              </Gallery>
            </div>
          </div>

          <Intro position="bottom" fadeIn={false} />
        </div>
      </Fragment>
    );
  }
}