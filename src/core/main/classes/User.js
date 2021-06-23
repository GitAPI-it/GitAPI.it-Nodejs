import { makeQuery } from '../utils/query/query.js';
import { defualtUser } from '../utils/query_list.js';
export class getUser {
  constructor(token, username) {
    this.requester = username
    this.token = token
  }
  async readData(user) {
    const body = `${defualtUser}`
    var variables = user
    var data = await makeQuery(this.token, this.requester, body, variables);
    return data.data
  }
}