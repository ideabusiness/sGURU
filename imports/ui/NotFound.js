import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>404 - Pagina non trovata</h1>
        <p>Spiacenti. Non sono riuscito a trovare la pagina che stai cercando.</p>
        <Link to="/" className="button button--link">HOMEPAGE</Link>
      </div>
    </div>
  );
};
