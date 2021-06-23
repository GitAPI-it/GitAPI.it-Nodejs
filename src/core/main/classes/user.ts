import { makeQuery } from '../utils/query/query';
import { defualtUser } from '../utils/query_list';
export class getUser {
  requester: string;
  token: string;
  constructor(token: string, username: string) {
    this.requester = username
    this.token = token
  }
  async readData(requestee: string) {
    const body = `${defualtUser}`
    var variables = requestee
    var data = await makeQuery(this.token, this.requester, body, variables);
    return data.data
  }
}