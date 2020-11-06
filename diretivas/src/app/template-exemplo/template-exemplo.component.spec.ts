import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateExemploComponent } from './template-exemplo.component';

describe('TemplateExemploComponent', () => {
  let component: TemplateExemploComponent;
  let fixture: ComponentFixture<TemplateExemploComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
