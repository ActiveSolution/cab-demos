import { Component } from '@angular/core';
import { selectFeatureAlarm, selectFeatureMotionSensor } from '../reducers';
import { Store } from '@ngrx/store';
import { activate, deactivate ,reset } from '../actions/alarm.actions';
import { detect, reset as motionReset } from '../actions/motion.actions';

@Component({
  selector: 'app-ng-rx-labs',
  standalone: true,
  imports: [],
  templateUrl: './ng-rx-labs.component.html',
  styleUrl: './ng-rx-labs.component.css'
})
export class NgRxLabsComponent {
  constructor(private store: Store) {
    this.store.select(selectFeatureAlarm).subscribe((state) => {
      console.log("Alarm", state);
    });

    this.store.select(selectFeatureMotionSensor).subscribe((state) => {
      console.log("motion", state);
    });
  }

  activate() {
    this.store.dispatch(activate());
  }

  deactivate() {
    this.store.dispatch(deactivate());
  }

  reset() {
    this.store.dispatch(reset());
  }

  detect(id: string) {
    this.store.dispatch(detect({ id }));
  }

  motionReset(id: string) {
    this.store.dispatch(motionReset({ id }));
  }
}



