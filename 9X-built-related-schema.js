const { graphql, buildSchema} = require('graphql');
const { GraphQLSchema, GraphQLObject, GraphQLString, GraphQLObjectType, GraphQLID, GraphQLInt } = require('graphql');
const graphqlHTTP = require('express-graphql')

// TODO put this whole project in github -- so I can work on it from any machine
// TODO import types from class.gql?

const MeetingType = new GraphQLObjectType({
    name: 'Meeting',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        Building: { type: GraphQLString },
        Room: { type: GraphQLString },
        Day: { type: GraphQLString },
        Time: { type: GraphQLString },
        Duration: { type: GraphQLInt }
    }
})

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      Title: { type: new GraphQLNonNull(GraphQLString) },
      Description: { type: GraphQLString },
      Instructor: { type: GraphQLString },
      Meetings: [{ type: Meeting }],
      MaxStudents: { type: GraphQLInt}
    }
  })

// TODO fake data provider

// TODO build up GraphQLSchema

// TODO Resolvers

// serve stuff up
const express = require('express');
const server = express();

// server.use -- both get and post verbs will work

server.use('/', graphqlHTTP({
    schema: builtSchema, // short hand for schema: schema
    rootValue: root,
    graphiql: true
}));

server.listen(3000, () => {
        console.log('Server is running...')
    }
)