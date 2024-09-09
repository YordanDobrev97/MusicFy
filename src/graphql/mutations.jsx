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

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(loginUserInput: { email: $email, password: $password }) {
      access_token
    }
  }
`
