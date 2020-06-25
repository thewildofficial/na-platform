import { ExampleObject } from '../interfaces/example';
import { Schema, Document, model } from 'mongoose';
import { CommonMetadataSchema } from '../../shared/models/common-metadata.model';

export const ExampleSchema: Schema = new Schema({
    ...CommonMetadataSchema.obj,
    _id: { type: Schema.Types.ObjectId },
    username: { type: String, required: true },
    email: { type: String, required: true },
}, {
    // remove __v from object
    versionKey: false,
});

export interface IExampleModel extends ExampleObject, Document { }
export const ExampleModel = model<IExampleModel>(`example_example`, ExampleSchema);
