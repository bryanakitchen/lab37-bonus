export const getUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => ({
      username: json.login,
      Name: json.name,
      Followers: json.followers,
      Following: json.following,
      Profile: json.html_url
    }));
};
