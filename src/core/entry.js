import User from "./main/classes/User.js";
import checkUser from "./main/utils/credentials/checkCredentials.js";
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
  checkUser({ user: requester, token: token });
  return {
    User,
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
