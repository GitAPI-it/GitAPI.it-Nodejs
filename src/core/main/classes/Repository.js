import { makeQuery } from "../utils/query/query.js";
import * as constants from "../utils/query_list.js";
import { getToken, getRequester, getSimplify } from "../../entry.js";
export default class Repo {
  constructor({owner, name}) {
    this.owner = owner; 
    this.name = name;
  }
  async repoGraphQLDataFull() {
    var body;
    if (getSimplify() == true) {
      body = constants.defaultSimplifiedRepoData;
    }
    else {
      body = constants.defaultUnsimplifiedRepoData;
    }
    var variables = {
      owner: this.owner,
      name: this.name
    }
    var data = await makeQuery(getToken(), getRequester(), body, variables);
    return data.data.repository
  }
  async restfulDataFull() {
    let data = await axios.get('https://api.github.com/repos/' + this.username + "/" + this.name);
    return data;
  }
}