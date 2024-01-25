import { Component } from '@angular/core';
import {
  mergeMap,
  concatMap,
  switchMap,
  exhaustMap,
  mergeScan,
  switchScan,
  mergeAll,
  map,
  switchAll,
  concatAll,
  exhaustAll,
  combineLatestAll,
  delayWhen,
  debounceTime,
  withLatestFrom,
  combineLatestWith,
  debounce,
} from 'rxjs/operators';
import {
  from,
  of,
  delay,
  interval,
  take,
  combineLatest,
  zip,
  race,
  forkJoin,
  partition,
  timer,
  fromEvent,
  Subject,
} from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-rx-js-maps',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './rx-js-maps.component.html',
  styleUrl: './rx-js-maps.component.css',
})
export class RxJsMapsComponent {
  numbers: any[] = [];
  completed: Boolean = false;
  private switchMapkeyUp$: Subject<string> = new Subject<string>();
  private exhaustMapButtonClick$: Subject<void> = new Subject<void>();
  private withLatestFromButtonClick$: Subject<void> = new Subject<void>();
  private combineLatestButtonClick$: Subject<void> = new Subject<void>();

  constructor() {
    this.switchMapkeyUp$
      .pipe(switchMap((text) => of(text).pipe(delay(500))))
      .subscribe((text) => console.log("Switchmap debounce " + text));

    this.switchMapkeyUp$
      .pipe(debounceTime(500))
      .subscribe((text) => console.log(`DebounceTimer ${text}`));

    this.switchMapkeyUp$
      .pipe(debounce(() => timer(500)))
      .subscribe((text) => console.log(`Debounce ${text}`));

    this.exhaustMapButtonClick$
      .pipe(exhaustMap(() => of([]).pipe(delay(2000))))
      .subscribe(() => console.log('Request sent!'));

      let incr2 = 0;

      let withLatestFrom$ = this.withLatestFromButtonClick$
      .pipe(
        map(() => incr2++),
        withLatestFrom(
          interval(500)
        )
      )
      .subscribe((n) => console.log(`Emitted WithLatestFrom ${n}`));

      let incr = 0;

      let combineLatest$ = this.combineLatestButtonClick$
      .pipe(
        map(() => incr++),
        combineLatestWith(
          interval(500)
        )
      )
      .subscribe((n) => console.log(`Emitted CombineLatestWith ${n}`));
  }

  private rnd(): number {
    return Math.random() * 1000;
  }

  private exampleMaps(operator: any): void {
    this.numbers = [];
    this.completed = false;

    let $inner = of(1, 2, 3).pipe(delayWhen((_) => timer(this.rnd())));

    from([0, 1, 2, 3, 4])
      .pipe(
        delay(500),
        operator((source: number) =>
          $inner.pipe(map((inner) => inner * source))
        )
      )
      .subscribe({
        next: (x) => this.logAndPush(x),
        error: (e: Error) => console.log(e),
        complete: () => (this.completed = true),
      });
  }

  private exampleTransformationScans(operator: any): void {
    this.numbers = [];
    this.completed = false;

    from([0, 1, 2, 3, 4])
      .pipe(
        operator((acc: number, x: number) => of(acc * x).pipe(delay(1000)), 3)
      )
      .subscribe({
        next: (x) => this.logAndPush(x),
        complete: () => (this.completed = true),
      });
  }

  private exampleJoins(operator: any): void {
    this.numbers = [];
    this.completed = false;

    let fiveValues$ = from([0, 1, 2, 3, 4]); //emit 5 values
    let source2$ = fiveValues$.pipe(
      map((value) => interval(value * 500).pipe(take(3)))
    ); //for each value, produce an inner observable with interval of value * 500ms and emit the 3 first values

    let result = source2$.pipe(operator()); //emits 5 * 3 values (15 values)

    result.subscribe({
      next: (x) => this.logAndPush(x),
      error: (e: Error) => console.log(e),
      complete: () => (this.completed = true),
    });
  }

  exampleCombineLatestAll(): void {
    this.numbers = [];
    this.completed = false;

    let foo$ = interval(Math.random() * 2000).pipe(
      take(5),
      map((x) => `foo ${x}`)
    );
    let bar$ = interval(Math.random() * 2000).pipe(
      take(10),
      map((x) => `bar ${x}`)
    );
    let baz$ = interval(Math.random() * 2000).pipe(
      take(5),
      map((x) => `baz ${x}`)
    );

    let result = of(foo$, bar$, baz$).pipe(combineLatestAll());
    // let res2 = combineLatest([foo$, bar$, baz$]);

    result.subscribe({
      next: (x) => this.logAndPush(x),
      error: (e: Error) => console.log(e),
      complete: () => (this.completed = true),
    });
    // res2.subscribe({ next: (x) => this.logAndPush(x), error: (e: Error) => console.log(e), complete: () => this.completed = true  });
  }

  private joinCreation(operator: any): void {
    this.numbers = [];
    this.completed = false;

    let names$ = of('Sensor 1', 'Sensor 2', 'Sensor 3').pipe(
      delay(Math.random() * 1000)
    );
    let temperature$ = of(27.5, 15, 5.5).pipe(delay(Math.random() * 1000));
    let battery$ = of(59, 100, 4).pipe(delay(Math.random() * 1000));

    let result = operator(names$, temperature$, battery$); //.pipe(map(([name, temperature, battery]) => ({ name, temperature, battery })));

    result.subscribe({
      next: (x: any) => this.logAndPush(JSON.stringify(x)),
      error: (e: Error) => console.log(e),
      complete: () => (this.completed = true),
    });
  }

  partition(): void {
    let numbers$ = of(1, 2, 3, 4, 5, 6);

    let [even$, odd$] = partition(numbers$, (x: number) => x % 2 === 0);

    even$.subscribe({
      next: (x: any) => this.logAndPush(x),
      error: (e: Error) => console.log(e),
      complete: () => (this.completed = true),
    });
    odd$.subscribe({
      next: (x: any) => this.logAndPush(x),
      error: (e: Error) => console.log(e),
      complete: () => (this.completed = true),
    });
  }

  testMergeScan(): void {
    this.exampleTransformationScans(mergeScan);
  }

  testSwitchScan(): void {
    this.exampleTransformationScans(switchScan);
  }

  testMergeMap(): void {
    this.exampleMaps(mergeMap);
  }

  testConcatMap(): void {
    this.exampleMaps(concatMap);
  }

  testSwitchMap(): void {
    this.exampleMaps(switchMap);
  }

  testexhaustMap(): void {
    this.exampleMaps(exhaustMap);
  }

  testMergeAll(): void {
    this.exampleJoins(mergeAll);
  }

  testSwitchAll(): void {
    this.exampleJoins(switchAll);
  }

  testExhaustAll(): void {
    this.exampleJoins(exhaustAll);
  }

  testConcatAll(): void {
    this.exampleJoins(concatAll);
  }

  testZip(): void {
    this.joinCreation(zip);
  }

  testRace(): void {
    this.joinCreation(race);
  }

  testForkJoin(): void {
    this.joinCreation(forkJoin);
  }

  onKeyUp(event: any): void {
    this.switchMapkeyUp$.next(event.target.value);
  }

  onButtonClick(): void {
    this.exhaustMapButtonClick$.next();
  }

  onWithLatestFromClick(): void {
    this.withLatestFromButtonClick$.next();
  }

  onCombineLatestButonClick(): void {
    this.combineLatestButtonClick$.next();
  }

  private logAndPush(x: any): void {
    console.log(x);
    this.numbers.push(x);
  }
}
