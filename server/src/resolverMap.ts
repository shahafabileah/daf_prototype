// https://stackoverflow.com/questions/68690827/cant-import-iresolvers-from-graphql-tools
import { IResolvers } from '@graphql-tools/utils';

import Charity from './Charity';
import CharityAPI from './CharityAPI';

const resolverMap: IResolvers = {
  Query: {
    helloWorld(parent, args): string {
      return `👋 Hello world! 👋`;
    },

    charity(parent, args): Charity | null {
      return CharityAPI.getCharity(args.ein);
    },

    charities(parent, args): Charity[] {
      return CharityAPI.getCharities(args.searchTerm);
    }
  },
};
export default resolverMap;
