import fetch from "node-fetch";
import fs from 'fs'
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
  var stuff = {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: body,
      variables: userData,
    })
  }
  console.log(stuff)
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
      ${userData} is not a valid user. Please input a valid user
    `);
  }
  return json;
}
