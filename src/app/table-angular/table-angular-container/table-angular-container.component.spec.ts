import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAngularContainerComponent } from './table-angular-container.component';

describe('TableAngularContainerComponent', () => {
  let component: TableAngularContainerComponent;
  let fixture: ComponentFixture<TableAngularContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAngularContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAngularContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
