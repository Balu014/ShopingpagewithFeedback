import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  getFeedbacks : any =[];
  constructor(private feedService : FeedbackService) { 
    // getting data from service file
    this.feedService.feedbackSubject.subscribe((data)=>
    this.getFeedbacks = data
    )
  }

  ngOnInit(): void {
    this.getFeebdacksdata();
  }

  // getting data from localstorage
  getFeebdacksdata(){
    if(localStorage.getItem('FeedbackData')){
      this.getFeedbacks = JSON.parse(localStorage.getItem("FeedbackData")|| '{}')
      console.log("Got Feedbackdata" + JSON.stringify( this.getFeedbacks))
    }
  }

}
