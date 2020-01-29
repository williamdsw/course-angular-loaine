import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExemploComponent } from './template-exemplo.component';

describe('TemplateExemploComponent', () => {
  let component: TemplateExemploComponent;
  let fixture: ComponentFixture<TemplateExemploComponent>;

  beforeEach(async(() => {
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
