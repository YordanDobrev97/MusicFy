import { gql } from '@apollo/client';

export const SIGN_UP_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(data: { email: $email, password: $password }) {
      id
      email
      createdAt
    }
  }
`