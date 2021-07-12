import { makeQuery } from "../utils/query/query.js";
import * as constants from "../utils/query_list.js";
import { getToken } from "../../entry.js";
import { getRequester } from "../../entry.js";
import { getSimplify } from "../../entry.js";
export default class User {
  constructor(username) {
    if (!username) {
      throw new Error("Username of the user being queried could not be found");
    }
    this.username = username;
  }
  async userGraphQLDataFull() {
    var body;
    if (getSimplify() == true) {
      body = `${constants.defaultSimplifiedUserData}`;
    } else {
      body = `${constants.defaultUnsimplifiedUserData}`;
    }
    var variables = {
      username: this.username,
    };
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.user;
  }
  async userFollowGraphQLData({ followerCount, followingCount }) {
    var body
    if (!followerCount) followerCount = 10;
    if (!followingCount) followingCount = 10;
    if (getSimplify() == true) {
      body = `${constants.defualtSimplifiedUserFollowData}`;
    }
    else {
      body = `${constants.defualtUnsimplifiedUserFollowData}`
    }

    var variables = {
      username: this.username,
      followerCount: followerCount,
      followingCount: followingCount,
    };
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.user;
  }
  async userRestfulData() {
    let data = await axios.get('https://api.github.com/users/' + this.username);
    return data;
  }
}
