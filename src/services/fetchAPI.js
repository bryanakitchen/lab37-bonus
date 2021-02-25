export const getUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => ({
      username: json.login,
      name: json.name,
      followers: json.followers,
      following: json.following,
      profile: json.html_url
    }));
};

export const getReposByUser = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      repo: repo.name,
      repo_path: repo.full_name,
      description: repo.description,
      link: repo.url
    })));
};

export const getPullsByUser = (username) => {
  return fetch(`
  https://api.github.com/search/issues?q=is:pr+author:${username}`)
    .then(res => res.json())
    .then(json => ({
      total: json.total_count,
      pullData: json.items
    }));
};
