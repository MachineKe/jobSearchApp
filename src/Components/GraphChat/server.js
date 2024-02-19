const { ApolloServer } = require('apollo-server')


const {sequelize} = require('./models')

const resolvers = require('./GrapQl/Resolvers')
const typeDefs = require('./GrapQl/TypeDefs')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx) => ctx,
});

server.listen().then(({ url })=> {
  console.log(`🚀 Server ready at ${url}`)

  sequelize.authenticate()
    .then(() => console.log('Databse connected!'))
  .catch(err=>console.log(err))
})