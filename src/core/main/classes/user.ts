import { makeQuery } from '../utils/query/query';
import { user_default } from '../utils/query_list';
export class getUser {
  name: string;
  token: string;
  constructor(token: string, username: string) {
    this.name = username
    this.token = token
  }
  async readData() {
    const body = {
      query: user_default(`${this.name}`)
    }
    var data = await makeQuery(this.token, body);
    return data.data.user
  }
}