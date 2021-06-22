export function user_default(name) {
  return (`{
    user(login: "${name}") {
      login
      bio
      avatarUrl
      name
      twitterUsername
      isDeveloperProgramMember
      followers(first: 10) {
        nodes {
          login 
        } 
      }
      following(first: 10) {
        nodes {
          login
        }
      }
    }
  }`)
}