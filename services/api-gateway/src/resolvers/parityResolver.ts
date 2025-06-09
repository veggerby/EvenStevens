import { sendDetermineParityCommand } from '../kafka/producer';
import jwt from 'jsonwebtoken';
import { getParityResultFromGrpc } from '../grpc/queryClient';

export const resolvers = {
  Mutation: {
    async evaluateIsEven(_: any, { number }: { number: number }, context: any) {
      // Validate JWT (Auth0)
      const authHeader = context.req.headers.authorization || '';
      if (!authHeader.startsWith('Bearer ')) throw new Error('Missing JWT');
      const token = authHeader.replace('Bearer ', '');
      jwt.verify(token, process.env.AUTH0_CLIENT_SECRET || 'secret');
      await sendDetermineParityCommand(number, token);
      return true;
    },
  },
  Query: {
    async parityOf(_: any, { number }: { number: number }) {
      // Query the gRPC read API for the result
      return getParityResultFromGrpc(number);
    },
  },
};
