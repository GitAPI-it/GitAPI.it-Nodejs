import User from "./main/classes/User.js";
import customQuery from './main/classes/Custom.js'
import Repo from './main/classes/Repository.js'
var tokenVar;
var requesterVar;
var canSimplify;
export default function GITAPI({ token, requester, simplify }) {
  tokenVar = token;
  requesterVar = requester;
  if (typeof simplify !== "boolean") {
    throw new Error("Invalid option for simplifying");
  }
  canSimplify = simplify;
  return {
    User,
    customQuery,
    Repo
  };
}
export function getToken() {
  return tokenVar;
}
export function getRequester() {
  return requesterVar;
}
export function getSimplify() {
  return canSimplify;
}
