import { makeQuery } from "../utils/query/query.js";
import * as constants from "../utils/query_list.js";
import { getToken, getRequester, getSimplify } from "../../entry.js";

export default class customQuery {
  constructor(query, variables = {}) {
		this.query = query;
    this.variables = variables;
  }
  async sendData() {
    var data = await makeQuery(getToken(), getRequester(), this.query, this.variables);
    return data;
  }
}
/* 
class myClass extends customQuery {
	constructor(query, variables) {
		super(query, variables);
	}
	
	async myFunc() {
		console.log(await this.sendData())
	}
}

const myCustomThing = new myClass();
*/