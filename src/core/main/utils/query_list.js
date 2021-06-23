export const defualtSmallUser = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    name
    email
    avatarUrl
    createdAt
    isSiteAdmin
    location
    twitterUsername
    isDeveloperProgramMember
  
  }
}
`
export const defualtUserFollowData = `
query defualtUserData($username: String!) {
  user(login: $username) {
  	followers(first: 10) {
      nodes {
        login
      }
    }
    following(first:10) {
      nodes {
        login
      }
    }
  }
}
`