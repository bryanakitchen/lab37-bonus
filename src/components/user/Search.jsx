import React, { useState } from 'react';
import { getReposByUser, getUser } from '../../services/fetchAPI';
import UserRepoList from './UserRepoList';
import UserTemplate from './UserTemplate';

export default function Search() {
  const [name, setName] = useState('');
  const [result, setResult] = useState({});
  const [repos, setRepos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    getUser(name)
      .then(result => setResult(result));

    getReposByUser(name)
      .then(result => setRepos(result));

    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for Username"
          type="text"
          value={name}
          onChange={(e => setName(e.target.value))}
        />
        <button>Search</button>
      </form>

      <UserTemplate result={result} />
      <h3>Repo List:</h3>
      <UserRepoList repos={repos} />
    </>
  );
}
