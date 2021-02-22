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
