import axios from "axios";
import { makeQuery } from "../query/query.js";
import * as constants from "../query_list.js";
export default async function check({ user, token }) {
  try {
    var checkUser = await axios.get("https://api.github.com/users/" + user);
  } catch {
    throw new Error("Requester's username is invalid");
  }
  var variables = {
    username: user,
  };
  makeQuery(token, user, constants.defualtSmallUserData, variables);
}
