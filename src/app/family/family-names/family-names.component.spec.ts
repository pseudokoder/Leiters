import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyNamesComponent } from './family-names.component';

describe('FamilyNamesComponent', () => {
  let component: FamilyNamesComponent;
  let fixture: ComponentFixture<FamilyNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
