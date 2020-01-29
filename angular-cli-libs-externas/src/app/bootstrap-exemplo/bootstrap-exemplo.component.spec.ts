import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapExemploComponent } from './bootstrap-exemplo.component';

describe('BootstrapExemploComponent', () => {
  let component: BootstrapExemploComponent;
  let fixture: ComponentFixture<BootstrapExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
