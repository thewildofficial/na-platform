export interface ICommonMetadata {
    _id: any; // mongoose uses any;

    /** Date of creation */
    created: Date;

    /** Date of update */
    updated: Date;

    /** Points the user that created the object */
    authorId?: string;
}
