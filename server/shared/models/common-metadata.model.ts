import { Schema } from 'mongoose';
import { ICommonMetadata } from '../interfaces/common-metadata';

export const CommonMetadataSchema = new Schema<ICommonMetadata>({
    created: {
        type: Date,
        default: function (this: any) {
            if (!this.created) {
                this.created = Date.now();
            }
        },
    },
    updated: {
        type: Date,
        validate: {
            validator: function (this: any, value: Date) {
                return this.created <= value;
            },
        },
        default: function (this: any) {
            this.updated = Date.now();
        },
    },
    authorId: {
        type: Schema.Types.ObjectId,
    }
});
