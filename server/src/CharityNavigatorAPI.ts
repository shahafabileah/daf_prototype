/*
Charity Navigator API
https://charity.3scale.net/docs/data-api/reference#api-documentation

There's a "free plan" and a "content plan".  The latter costs $250/mo and provides:
- More detail on each organization
- Higher request cap

I signed up for a 30-day trial of the content plan.  To continue, I'd need to add CC info:
https://charity.3scale.net/

Application ID and key info here:
https://charity.3scale.net/admin/applications

Looks like the API was last updated in 2017:
https://charity.3scale.net/docs/data-api/changelog
*/

// Various libraries exist to simplify making http requests:
// https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
// 
// The popular one (Request) was put into maintenance:
// https://github.com/request/request/issues/3142
// 
// I picked one of the other popular ones:
// https://www.npmjs.com/package/got
import got from 'got';

const BASE_URL = 'https://api.data.charitynavigator.org/v2';
const APP_ID = process.env.CHARITY_NAVIGATOR_APP_ID || '';
const APP_KEY = process.env.CHARITY_NAVIGATOR_APP_KEY || '';

export default class CharityNavigatorAPI {
    private static getBaseURL(path: string) {
        const url = new URL(BASE_URL + path);
        url.searchParams.append("app_id", APP_ID);
        url.searchParams.append("app_key", APP_KEY);
        return url;
    }

    private static logError(err:any) {
        const {statusCode, statusMessage, body} = err.response;
        console.error(`Error: ${statusCode} ${statusMessage} ${body}`);
    }

    public static async getCharities(searchTerm: string) {
        const url = CharityNavigatorAPI.getBaseURL("/Organizations");
        url.searchParams.append("search", searchTerm);
        url.searchParams.append("searchType", "NAME_ONLY");
        url.searchParams.append("sort", "RATING:DESC");
        url.searchParams.append("pageSize", "3");

        try{
            const response = await got(url.href);
            return JSON.parse(response.body);
        } catch (err:any) {
            CharityNavigatorAPI.logError(err);
            // TODO: define the error contract (return empty or throw)
            return [];
        }
    }

    public static async getCharity(ein: string) {
        const url = CharityNavigatorAPI.getBaseURL(`/Organizations/${ein}`);

        try {
            const response = await got(url.href);
            return JSON.parse(response.body);
        } catch (err:any) {
            CharityNavigatorAPI.logError(err);
            // TODO: define the error contract (return null or throw)
            return null;
        }
    }
}
