import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import useStyles from './styles';

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Test route',
    path: '/test'
  },
  {
    name: 'Test not found',
    path: '/dsadsadsad'
  }
];

interface IProps { }

const Nav: React.FC<IProps> = () => {
  const [current, setCurrent] = useState<number>(-1);
  const location = useLocation();
  const { classes } = useStyles();
  const c = 24 * (current) + 16 * current + 10 + 16 * 0.25;

  useEffect(() => {
    const idx = pages.findIndex(obj => obj.path === location.pathname);
    setCurrent(idx);
  }, [location.pathname]);

  return (
    <div
      className={classes.main}
    >
      <div
        style={{
          opacity: current < 0 ? 0 : 1,
          top: current >= 0
            ? c
            : '-100%'
        }}
        className={classes.selector}
      >
      </div>
      {pages.map((p, i) => {
        return (
          <Link
            className={cx(
              classes.entry,
              { [classes.current]: i === current }
            )}
            draggable={false}
            to={p.path}
            key={i}>
            {p.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;