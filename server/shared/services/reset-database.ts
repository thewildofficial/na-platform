import { resetExampleCollections } from "../../example/services/example-reset.service";
import { resetFeedbackCollections } from "../../feedback/services/feedback-reset.service";

export let resetDatabase = () => new Promise((resolve, reject) => {
    Promise.all([
        resetExampleCollections(),
        resetFeedbackCollections(),
    ])
    .then(collections => resolve(collections))
    .catch(err => reject(err));
});
