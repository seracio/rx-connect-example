// @flow
import { of } from 'rxjs/observable/of';
import { map, shareReplay } from 'rxjs/operators';

// use shareReplay
// see @ https://stackoverflow.com/questions/46207592/rxjs-5-converting-an-observable-to-a-behaviorsubject
export const hello$ = of('world').pipe(shareReplay(1));
