export default class Auction {
    constructor(price, timeToBid, timeToDeliver, description, llm) {
        this.price = price;
        this.timeToBid = timeToBid;
        this.timeToDeliver = timeToDeliver;
        this.description = description;
        this.llm = llm;
    }
}
