import { User } from './main/classes/User.js'
var tokenVar;
var requesterVar
export function GITAPI({token, requester}) {
  tokenVar = token
  var requesterVar = requester
  return {
    User
  }
}
export function getToken() {
  return tokenVar
}
export function getRequester() {
  return requesterVar
}