import React, { Component } from 'react';
// Absolute paths are not working with TS at the moment:
// https://github.com/facebook/create-react-app/issues/5692
// Update when above issue is resolved
import { BackHome } from '../BackHome';
import { Card } from '../../shared/Card';
import { Intro } from '../Intro';
import { Resume } from '../Data/Resume';
import css from './Professional.module.scss';

export class Professional extends Component<{}, {}> {
  renderWorkExperience() {
    return (
      Resume.work.map((item, idx) => {
        const { company, location, position, time, responsibilities } = item;

        return (
          <Card
            key={idx}
            title={company}
            extra={location}
            descriptor={position}
            subtitle={time}
            items={responsibilities}
          />
        )
      })
    );
  }

  render() {
    const { school, location, major, time, blurb } = Resume.education;

    return (
      <div className={css.subLayout}>
        <div className={css.contentWrapper}>
          <div className={css.subLayoutContent}>
            <BackHome></BackHome>

            <h1>Resume</h1>
            <p
              className={css.resumeProfile}
              dangerouslySetInnerHTML={{ __html: Resume.profile }}
            />

            <h2>Work Experience</h2>
            {this.renderWorkExperience()}

            <h2>Skills</h2>
            <p>{Resume.skills}</p>

            <h2>Dabbles In</h2>
            <p>{Resume.dabbles}</p>

            <h2>Education</h2>
            <Card
              title={school}
              extra={location}
              descriptor={major}
              subtitle={time}
              items={[blurb]}
            />
          </div>
        </div>

        <Intro fadeIn={false} />
      </div>
    );
  }
}