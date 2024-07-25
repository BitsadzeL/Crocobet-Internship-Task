import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentDateSource = new BehaviorSubject<Date>(new Date());
  currentDate$ = this.currentDateSource.asObservable();

  updateCurrentDate(date: Date) {
    this.currentDateSource.next(date);
  }
}
