const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/index')
const ws = require('ws')



// const pubSub = new PubSub()


const PORT = process.env.PORT || 5000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb connected");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  })
  .catch(err=>{
    console.error(err)
  })

  const wss = new ws.WebSocketServer({ server })
wss.on('connection', (connection) => {
  console.log('connected')
})