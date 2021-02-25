import React from 'react';
import PropTypes from 'prop-types';

function PullRequest({ pull_request, title, state }) {
  return (
    <div>
      <a href={pull_request.url}>Pull Request: {pull_request.url}</a>
      <p>Title: {title}</p>
      <p>State: {state}</p>
    </div>
  );
}

PullRequest.propTypes = {
  pull_request: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default PullRequest;

