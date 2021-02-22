import React from 'react';
import PropTypes from 'prop-types';

export default function UserTemplate({ result }) {
  return (
    <div>
      <h3>Username: {result.username}</h3>
      <p>Name: {result.name}</p>
      <p>Followers: {result.followers}</p>
      <p>Following: {result.following}</p>
      <a href={result.profile}>{result.profile}</a>
    </div>
  );
}

UserTemplate.propTypes = {
  result: PropTypes.objectOf({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    profile: PropTypes.string.isRequired
  }).isRequired
};
