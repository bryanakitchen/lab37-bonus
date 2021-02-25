import React from 'react';
import PropTypes from 'prop-types';
import PullRequest from './PullRequest';

function UserPRList({ pullTotal, pullRequests }) {
  const pullRequestElements = pullRequests.map((pullRequest, i) => {
    if(pullRequest)
    {
      return (
        <li key={i} >
          <PullRequest {...pullRequest } />
        </li>
      );
    }
    return;
  });

  return (
    <>
      <p>Total: {pullTotal}</p>
      <ul>
        {pullRequestElements}
      </ul>
    </>
  );
}

UserPRList.propTypes = {
  pullTotal: PropTypes.string.isRequired,
  pullRequests: PropTypes.arrayOf(
    PropTypes.shape({
      pull_request: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }).isRequired
  )
};

export default UserPRList;
