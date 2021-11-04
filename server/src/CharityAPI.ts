/*
This is a generic charity API.

It defines an agnostic format/contract for charity info and gives a layer of indirection 
that allows swapping in other charity-data providers.
*/

import Charity from './Charity';
import CharityNavigatorAPI from './CharityNavigatorAPI';

export default class CharityAPI {
    // TODO: swap "any" with real types
    private static packageCharity(charity:any) : Charity {
        return new Charity(
            charity.charityName,
            charity.websiteURL,
            charity.currentRating?.score,
            charity.ein
        );
    }

    /*
    Sample query:

        query ExampleQuery {
          charity(ein: "912061474") {
            name,
            url,
            score,
            ein
          }
        }
    */
    public static async getCharity(ein: string) {
        const result = await CharityNavigatorAPI.getCharity(ein);
        return this.packageCharity(result);
    }

    /*
    Sample query:

        query ExampleQuery($searchTerm: String) {
          charities(searchTerm: "water") {
            name,
            url,
            score,
            ein
          }
        }
    */
    public static async getCharities(searchTerm: string) {
        const results = await CharityNavigatorAPI.getCharities(searchTerm);
        return results.map((result:any) => this.packageCharity(result));
    }
}
