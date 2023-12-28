import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmovieComponent } from './aboutmovie.component';

describe('AboutmovieComponent', () => {
  let component: AboutmovieComponent;
  let fixture: ComponentFixture<AboutmovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutmovieComponent]
    });
    fixture = TestBed.createComponent(AboutmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
