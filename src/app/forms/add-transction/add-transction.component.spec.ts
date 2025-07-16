import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransctionComponent } from './add-transction.component';

describe('AddTransctionComponent', () => {
  let component: AddTransctionComponent;
  let fixture: ComponentFixture<AddTransctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
