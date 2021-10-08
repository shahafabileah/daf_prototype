import Charity from './Charity';

const CHARITIES = [
    new Charity('Friends of Kexp', 'http://www.kexp.org/', 88, '91-2061474'),
    new Charity('Water.org', 'http://www.water.org/', 95.12, '58-2060131'),
    new Charity('Food Lifeline', 'http://www.foodlifeline.org/', 92.92, '91-1090450')
];

export default class CharityAPI {
    public static getCharity(ein: string) {
        return CHARITIES.find(charity => charity.ein === ein) || null;
    }

    public static getCharities(searchTerm: string) {
        return CHARITIES.filter(charity => charity.name.indexOf(searchTerm) >= 0)
    }
}
