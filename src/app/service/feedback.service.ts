import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }
  feedbackSubject = new Subject<any>()
}
