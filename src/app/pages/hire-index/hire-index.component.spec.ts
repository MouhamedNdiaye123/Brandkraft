import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireIndexComponent } from './hire-index.component';

describe('HireIndexComponent', () => {
  let component: HireIndexComponent;
  let fixture: ComponentFixture<HireIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HireIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
