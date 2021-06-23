import { makeQuery } from '../utils/query/query.js';
import * as constants from '../utils/query_list.js';
import { getToken } from '../../entry.js'
import { getRequester } from '../../entry.js'
export class User {
  constructor(username) {
    if (!username) {
      throw new Error("Username of the user being queried could not be found")
    }
    this.username = username
  }
  async getSmallGraphqlData() {
    const body = `${constants.defualtSmallUserData}`
    var variables = {
      username: this.username
    }
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.user
  }
  async getLargeGraphqlData() {
    const body = `${constants.defaultLargeUserData}`
    var variables = {
      username: this.username
    }
    var data = await makeQuery(getToken(), getRequester(), body, variables) 
    return data.data.user
  }
  async getAllGraphqlFollowerData(count) {
    if (!count)
    const body = `${constants.defualtUserFollowData}`
    var variables = {
      username: this.username,
      count: count
    } 
    var data = await makeQuery(getToken(), getRequester(), body, variables)
    return data.data.user
  }
}