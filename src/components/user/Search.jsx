import React, { useState } from 'react';
import { 
  getPullsByUser, 
  getReposByUser, 
  getUser 
} from '../../services/fetchAPI';
import UserRepoList from './UserRepoList';
import UserTemplate from './UserTemplate';
import UserPRList from './UserPRList';

export default function Search() {
  const [name, setName] = useState('');
  const [result, setResult] = useState({});
  const [repos, setRepos] = useState([]);

  const [pullTotal, setPullTotal] = useState('');
  const [pullRequests, setPullRequests] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    getUser(name)
      .then(result => setResult(result));

    getReposByUser(name)
      .then(result => setRepos(result));

    getPullsByUser(name)
      .then(result => {
        setPullTotal(result.total);
        setPullRequests(result.pullData);
      });

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
      <h3>PR List:</h3>
      <UserPRList pullTotal={pullTotal} pullRequests={pullRequests} />
    </>
  );
}
