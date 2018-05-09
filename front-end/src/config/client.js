
// CLIENT - EndPoint

import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-crystaltwister-566/mail-express-plus-store/dev" });

export { client }