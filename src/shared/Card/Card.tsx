import React, { Component } from 'react';
import css from './Card.module.scss';

interface CardProps {
  title: string;
  extra: string;
  descriptor: string;
  subtitle: string;
  items: string[];
}

export class Card extends Component<CardProps, {}> {
  render() {
    const { title, descriptor, extra, subtitle, items } = this.props;

    return (
      <div className={css.card}>
        <div className={css.header}>
          <span className={css.title}>{title}</span> |&nbsp;
          {extra} -&nbsp;
          <span className={css.descriptor}>{descriptor}</span>
          <div className={css.subtitle}>{subtitle}</div>
        </div>

        {items.length > 1 && (
          <ul>
            {items.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        )}
        {items.length === 1 && <p>{items[0]}</p>}
      </div>
    );
  }
}