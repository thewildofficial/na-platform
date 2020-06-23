import { ExampleArrayItem } from '../interfaces/example-array-item';
import axios from 'axios';
import { from, Observable } from 'rxjs';

export const getArray = (): Observable<ExampleArrayItem[]> =>
    from<Promise<ExampleArrayItem[]>>(
        axios.get('http://localhost:8080/api/example/array')
            .then(res => res.data),
    );