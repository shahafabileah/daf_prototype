// https://stackoverflow.com/questions/68690827/cant-import-iresolvers-from-graphql-tools
import { IResolvers } from '@graphql-tools/utils';

import Charity from './Charity';
import CharityAPI from './CharityAPI';

const resolverMap: IResolvers = {
  Query: {
    charity(parent, args): Promise<Charity | null> {
      return CharityAPI.getCharity(args.ein);
    },

    charities(parent, args): Promise<Charity[]> {
      return CharityAPI.getCharities(args.searchTerm)
    }
  },
};
export default resolverMap;
