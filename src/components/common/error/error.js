import React from 'react';

import './errors.scss';

const ErrorMessage = ({ error }) => (
  <div className="ErrorMessage">
    <small>No result ! Let's search again</small>
  </div>
);

export default ErrorMessage;
