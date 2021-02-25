import React from 'react';
import PropTypes from 'prop-types';

function UserRepo({ repo, repo_path, description, link }) {
  return (
    <details>
      <summary>{repo}</summary>
      <p>{repo_path}</p>
      <p>{description}</p>
      <a href={link}>{link}</a>
    </details>
  );
}

UserRepo.propTypes = {
  repo: PropTypes.string.isRequired,
  repo_path: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default UserRepo;

