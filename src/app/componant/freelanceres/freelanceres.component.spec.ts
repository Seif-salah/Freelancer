import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceresComponent } from './freelanceres.component';

describe('FreelanceresComponent', () => {
  let component: FreelanceresComponent;
  let fixture: ComponentFixture<FreelanceresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelanceresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
