export const defualtUser = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    name
  }
}
`