export async function makeQuery(token, requester, structure, userData) {
  const githubData = {
    token: token,
    username: `${requester}`,
  };
  const body = structure;
  const baseURL = "https://api.github.com/graphql";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + githubData["token"],
  };
  userData = JSON.stringify(userData);
  var info = await fetch(baseURL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: body,
      variables: userData,
    }),
  });
  var json = await info.json();
  if (json.message) {
    throw new Error(`
      Provided token is invalid. Please input a valid token
    `);
  }
  if (json.errors) {
    throw new Error(`
      We encountered an error! Error: ${json.errors[0].message}
    `);
  }
  return json;
}
