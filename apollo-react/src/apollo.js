import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movie.cndbook.com/",
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({ 
          id: `Movie:${id}`, 
          data: {
            isLiked: !isLiked,
          }
        });
      },
    }
  }
});

export default client;  