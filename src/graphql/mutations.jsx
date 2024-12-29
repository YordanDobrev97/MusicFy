import { gql } from '@apollo/client';

export const SIGN_UP_USER = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password)
  }
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
