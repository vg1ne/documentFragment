import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFragmentContainerComponent } from './table-fragment-container.component';

describe('TableFragmentContainerComponent', () => {
  let component: TableFragmentContainerComponent;
  let fixture: ComponentFixture<TableFragmentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFragmentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFragmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
