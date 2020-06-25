import { requireUncached } from '../../shared/services/utils.service';
import { ExampleModel } from '../models/example.model';

export async function resetExampleCollections() {
    try {
        let collection = await resetExample();

        return collection;
    } catch (err) {
        throw err;
    }
}

async function resetExample() {
    try {
        let samples = requireUncached('../../example/mocks/example.mocks.json');

        await ExampleModel.remove({});
        await ExampleModel.create(...samples);

        return 'example_example';
    } catch (err) {
        throw err;
    }
}
