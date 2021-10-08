export default class Charity {
    name: string;
    url: string;
    score: number;
    ein: string;

    constructor(name: string, url: string, score: number, ein: string) {
        this.name = name;
        this.url = url;
        this.score = score;
        this.ein = ein;
    }
}
