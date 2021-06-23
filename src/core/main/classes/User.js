import { makeQuery } from '../utils/query/query.js';
import * as constants from '../utils/query_list.js';
export class getUser {
  constructor(token, username) {
    this.requester = username
    this.token = token
  }
  async getSmallGraphqlData(user) {
    const body = `${constants.defualtSmallUser}`
    var variables = {
      username: user
    }
    var data = await makeQuery(this.token, this.requester, body, variables);
    return data.data
  }
  async getAllGraphqlFollowerData(user, count) {
    const body = `${constants.defualtUserFollowData}`
    var variables = {
      username: user,
      count: count
    } 
    var data = await makeQuery(this.token, this.requester, body, variables)
    return data
  }
}