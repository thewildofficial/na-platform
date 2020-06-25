import { IFeedback } from '../interfaces/feedback';
import axios from 'axios';
import { from, Observable } from 'rxjs';

export const getArray = (): Observable<IFeedback[]> =>
    from<Promise<IFeedback[]>>(
        axios.get('http://localhost:8080/api/feedback/feedbacks')
            .then(res => res.data),
    );
