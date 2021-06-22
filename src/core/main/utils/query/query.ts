import fetch from 'node-fetch'
export async function makeQuery(token: string, structure: object) {
  const githubData = {
    token: token,
    username: "darkarcool"
  }

  /*const body = {
    query: `
      query {
        user(login: "darkdarcool") {
          bio
        }
      }
    `
  }
  */
  const body = structure
  const baseURL = "https://api.github.com/graphql"

  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + githubData["token"],
  };
  var response = await fetch(baseURL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  })/*.then((response) => response.text())
.then((txt) => {
  console.log(txt)
})
*/
  var json = await response.json()
  return json
}