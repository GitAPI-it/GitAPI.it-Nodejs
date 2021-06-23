import fetch from 'node-fetch'
import { exit } from 'process';
export async function makeQuery(token: string, requester: string, structure: string, userData: string) {
  const githubData = {
    token: token,
    username: `${requester}`
  }
  const body = structure
  const baseURL = "https://api.github.com/graphql"
  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + githubData["token"],
  };
  var username = userData
  var info = await fetch(baseURL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: body,
      variables: JSON.stringify({
        username,
      }),
    }),
  });
  var json = await info.json()
  console.log(json)
  if (json.message) {
    throw new Error(`
      Invalid token. Please input a valid token
    `)
  }
  if (json.errors) {
    throw new Error(`
      ${username} is not a valid user. Please input a valid user
    `)
  }
  return json
}