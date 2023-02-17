import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { FeedbackService } from '../service/feedback.service';
// import '../../assets/images/smtp.js'
declare let Email : any; 

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  formdata = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message:new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  costomerName:any = []
  feedResponse : any = []

  


  constructor( private feedService : FeedbackService) { }

  ngOnInit(): void {
    
  }

  // Getters for Form Validation
  get userName(){
    return this.formdata.get('name')
  }
  get userEmail(){
    return this.formdata.get('email')
  }
  get userMessage(){
    return this.formdata.get('message')
  }

  // On Click of POST button
  Onpost(){
    let feedbackDataNull = localStorage.getItem('FeedbackData',)
    // if feedbackDataNull variable has no data
    if(feedbackDataNull == null){
      // let postData : any= [];
      this.feedResponse.push(this.formdata.value);
      localStorage.setItem('FeedbackData', JSON.stringify(this.feedResponse))
      console.log("Feedback Is " + JSON.stringify(this.feedResponse) )
    }
    //  if feedbackDataNull variable has 1 or more data 
    else{
      let index:number = -1;
      this.feedResponse = JSON.parse(localStorage.getItem('FeedbackData')|| '{}');
      if(index == -1){
        this.feedResponse.push(this.formdata.value)
        localStorage.setItem('FeedbackData', JSON.stringify(this.feedResponse))
      }
    }
    // get user entered formdata to our mail
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "balajikadava@gmail.com",
      Password : "327B5B5FFBFD1DB1BE637B54ED4C225BECB3",
      To : 'balajibalu63204@gmail.com',
      From : "balajikadava@gmail.com",
      Subject : "FEEDBACK RESPONSE",
      Body :  this.formdata.value
    }).then(
        (message: any) => {
          if(message == 'OK')alert(`Thanks For Sharing Your Feedback` );
          else alert(message);
        }
      );
    this.formdata.reset();
    this.feedFun();

  }

  feedmsg :any;
//   Storing data in service file
  feedFun(){
    var feedData = JSON.parse(localStorage.getItem('FeedbackData')|| '{}');
    this.feedmsg = feedData;
    this.feedService.feedbackSubject.next(this.feedmsg)
    // console.log("get detaisls"+ JSON.stringify(this.feedmsg))
  }

}
