import Charity from './Charity';

export default class CharityAPI {
    public static getCharity(ein: String) {
        // For now return a single hard-coded charity
        return new Charity('Friends of Kexp', 'http://www.kexp.org/', 88, '91-2061474');
    }

    public static getCharities(searchTerm: String) {
        // For now return a hard-coded list
        return [
            new Charity('Friends of Kexp', 'http://www.kexp.org/', 88, '91-2061474'),
            new Charity('Water.org', 'http://www.water.org/', 95.12, '58-2060131'),
            new Charity('Food Lifeline', 'http://www.foodlifeline.org/', 92.92, '91-1090450')
        ];
    }
}