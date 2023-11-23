// dependencies
import { Observable, tap } from 'rxjs';

export function log<T>(source$: Observable<T>, message: string): Observable<T> {
  return source$.pipe(tap((v) => console.log(message, v)));
}
