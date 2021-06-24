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
  async getSmallGraphqlData() {
    const body = `${constants.defualtSmallUserData}`;
    var variables = {
      username: this.username,
    };
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.user;
  }
  async getLargeGraphqlData() {
    var body;
    if (getSimplify() == true) {
      body = `${constants.defaultSimplifiedLargeUserData}`;
    } else {
      body = `${constants.defaultUnsimplifiedLargeUserData}`;
    }
    var variables = {
      username: this.username,
    };
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.user;
  }
  async getAllGraphqlFollowerData({ followerCount, followingCount }) {
    if (!followerCount) followerCount = 10;
    if (!followingCount) followingCount = 10;
    const body = `${constants.defualtUserFollowData}`;
    var variables = {
      username: this.username,
      followerCount: followerCount,
      followingCount: followingCount,
    };
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.user;
  }
}
