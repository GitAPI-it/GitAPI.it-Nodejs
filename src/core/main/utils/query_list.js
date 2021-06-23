export const defualtSmallUserData = `
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
query defualtUserData($username: String!, $count: Int!) {
  user(login: $username) {
  	followers(first: $count) {
      users: nodes {
        name: login
      }
    }
    following(first: $count) {
      users: nodes {
        name:login
      }
    }
  }
}
`

export const defaultLargeUserData = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    email
    avatarUrl
    createdAt
    isSiteAdmin
    location
    twitterUsername
    isDeveloperProgramMember
    id:databaseId
    anyPinnableItems
  }
}
`