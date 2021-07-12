export const defualtSimplifiedUserFollowData = `
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
`;
export const defualtUnsimplifiedUserFollowData = `
query defualtUserData($username: String!, $followerCount: Int!, $followingCount: Int!) {
  user(login: $username) {
  	followers(first: $followerCount) {
      nodes {
        login
      }
    }
    following(first: $followingCount) {
      nodes {
        login
      }
    }
  }
}
`;
export const defaultSimplifiedUserData = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    email
    avatarLink:avatarUrl
    accountCreatedAt:createdAt
    isAdmin:isSiteAdmin
    location
    name
    twitterUsername
    isDevMember:isDeveloperProgramMember
    userId:databaseId
    pinnedItems:anyPinnableItems
    company
    status {
      gitEmoji:emoji
      lastUpdated:updatedAt
      message
      id
      expires:expiresAt
    }
  }
}
`;
export const defaultUnsimplifiedUserData = `
query defualtUserData($username: String!) {
  user(login: $username) {
    bio
    email
    avatarUrl
    createdAt
    isSiteAdmin
    name
    location
    twitterUsername
    isDevMember: isDeveloperProgramMember
    databaseId
    anyPinnableItems
    company
    status {
      emoji
      updatedAt
      message
      id
      expiresAt
    }
  }
}
`;

export const defaultUnsimplifiedRepoData = `
query getRepoData($name:String! $owner: String!) {
  repository(name: $name owner: $owner) {
    name 
    id 
    description 
    homepageUrl
    isEmpty 
    isArchived 
    isDisabled 
    isLocked
    stargazerCount
    isPrivate 
    databaseId 
    createdAt
    primaryLanguage {
      name
    }
  }
}
`

export const defaultSimplifiedRepoData = `
query getRepoData($name:String! $owner: String!) {
  repository(name: $name owner: $owner) {
    name 
    id 
    description 
    homepageUrl
    isEmpty 
    isArchived 
    isDisabled 
    isLocked
    stargazerCount
    isPrivate 
    databaseId 
    created:createdAt
    primaryLang:primaryLanguage {
      lang:name
    }
  }
}
`