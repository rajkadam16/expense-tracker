import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransctionComponent } from './delete-transction.component';

describe('DeleteTransctionComponent', () => {
  let component: DeleteTransctionComponent;
  let fixture: ComponentFixture<DeleteTransctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTransctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTransctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
