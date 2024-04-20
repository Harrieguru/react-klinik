import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $role: String!
    $password: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      role: $role
      password: $password
    ) {
      id
    }
  }
`;


export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      role
    }
  }
`;


export const CREATE_DAILY_INFO_MUTATION = gql`
  mutation CreateDailyInfo(
    $pulseRate: String!
    $bloodPressure: String!
    $weight: String!
    $temperature: String!
    $respiratoryRate: String!
  ) {
    createDailyInfo(
      pulseRate: $pulseRate
      bloodPressure: $bloodPressure
      weight: $weight
      temperature: $temperature
      respiratoryRate: $respiratoryRate
    ) {
      id
      pulseRate
      bloodPressure
      weight
      temperature
      respiratoryRate
    }
  }
`;


