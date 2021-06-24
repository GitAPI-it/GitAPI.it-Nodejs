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
query defualtUserData($username: String!, $followerCount: Int!, $followingCount: Int!) {
  user(login: $username) {
  	followers(first: $followerCount) {
      users: nodes {
        name: login
      }
    }
    following(first: $followingCount) {
      users: nodes {
        name:login
      }
    }
  }
}
`

export const defaultSimplifiedLargeUserData = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    email
    avatarLink:avatarUrl
    accountCreatedAt:createdAt
    isAdmin:isSiteAdmin
    location
    twitterUsername
    isDevMember:isDeveloperProgramMember
    userId:databaseId
    pinnedItems:anyPinnableItems
  }
}
`
export const defaultUnsimplifiedLargeUserData = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    email
    avatarUrl
    createdAt
    isSiteAdmin
    location
    twitterUsername
    isDevMember:isDeveloperProgramMember
    databaseId
    anyPinnableItems
  }
}
`