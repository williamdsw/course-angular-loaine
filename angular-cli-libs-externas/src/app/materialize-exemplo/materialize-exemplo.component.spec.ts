import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeExemploComponent } from './materialize-exemplo.component';

describe('MaterializeExemploComponent', () => {
  let component: MaterializeExemploComponent;
  let fixture: ComponentFixture<MaterializeExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
