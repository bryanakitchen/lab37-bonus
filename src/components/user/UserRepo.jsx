import React from 'react';
import PropTypes from 'prop-types';

function UserRepo({ repo, repo_path, description }) {
  return (
    <details>
      <summary>{repo}</summary>
      <p>{repo_path}</p>
      <p>{description}</p>
    </details>
  );
}

UserRepo.propTypes = {
  repo: PropTypes.string.isRequired,
  repo_path: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default UserRepo;

