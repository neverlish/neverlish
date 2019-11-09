import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProifle = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();

      return {
        user: userProifle,
        posts
      };
    }
  },
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    }
  }
};