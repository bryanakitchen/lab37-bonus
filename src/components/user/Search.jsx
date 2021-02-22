import React, { useState } from 'react';
import { getUser } from '../../services/fetchAPI';
import UserTemplate from './UserTemplate';

export default function Search() {
  const [name, setName] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    getUser(name)
      .then(result => setResult(result));
      
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
    </>
  );
}
