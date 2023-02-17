import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnewCollectionComponent } from './aboutnew-collection.component';

describe('AboutnewCollectionComponent', () => {
  let component: AboutnewCollectionComponent;
  let fixture: ComponentFixture<AboutnewCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutnewCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutnewCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
