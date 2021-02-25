import React from 'react';
import PropTypes from 'prop-types';
import UserRepo from './UserRepo';

function UserRepoList({ repos }) {
  const repoElements = repos.map((repo, i) => {
    if(repo.repo)
    {
      return (
        <li key={i} >
          <UserRepo {...repo} />
        </li>
      );
    }
    return;
  });

  return (
    <ul>
      {repoElements}
    </ul>
  );
}

UserRepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      repo: PropTypes.string.isRequired,
      repo_path: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  )
};

export default UserRepoList;
