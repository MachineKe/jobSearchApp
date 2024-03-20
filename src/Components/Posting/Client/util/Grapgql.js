import gql from 'graphql-tag'

export    const FETCH_POSTS_QUERY = gql`
    query {
      getPosts {
        id
        body
        createdAt
        username
        likeCount
        likes {
          username
        }
        commentCount
        comments {
          id
          username
          createdAt
          body
        }
      }
    }
  `;

  // Query to fetch user information
export const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      email
      username
      createdAt
      phone
      followerCount
      followers {
        id
        username
        createdAt
      }
    }
  }
`;

// Query to fetch all users
export const FETCH_USERS_QUERY = gql`
  query {
    getUsers {
      id
      email
      username
      createdAt
      phone
      followerCount
      followers {
        id
        username
        createdAt
      }
    }
  }
`;
