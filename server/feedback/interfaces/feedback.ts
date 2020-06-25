export interface IFeedback {
    _id: any; // mongoose is using any :(
    message: string;
    sentBy: string;
}
