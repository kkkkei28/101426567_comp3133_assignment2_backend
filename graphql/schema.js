const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    image: String 

  }

  type AuthData {
    userId: ID!
    token: String!
  }

  type Query {
    login(email: String!, password: String!): AuthData
    getAllEmployees: [Employee]
    searchEmployeeByEid(id: ID!): Employee
    searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    addEmployee(first_name: String!, last_name: String!, email: String!, gender: String, designation: String!, salary: Float!, date_of_joining: String!, department: String!, image: String): Employee
    updateEmployee(id: ID!, first_name: String, last_name: String, email: String, designation: String, department: String,  image: String): Employee
    deleteEmployee(id: ID!): String
  }

  
`);
