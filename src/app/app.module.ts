import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcollectionComponent } from './newcollection/newcollection.component';
import { AboutnewCollectionComponent } from './aboutnew-collection/aboutnew-collection.component';
import { ModelComponent } from './model/model.component';
import { StoryComponent } from './story/story.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FooterComponent } from './footer/footer.component';
import { ColsComponent } from './cols/cols.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';



@NgModule({
  declarations: [
    AppComponent,
    NewcollectionComponent,
    AboutnewCollectionComponent,
    ModelComponent,
    StoryComponent,
    FormModelComponent,
    FooterComponent,
    ColsComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
