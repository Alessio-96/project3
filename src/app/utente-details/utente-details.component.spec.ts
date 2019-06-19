import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteDetailsComponent } from './utente-details.component';

describe('UtenteDetailsComponent', () => {
  let component: UtenteDetailsComponent;
  let fixture: ComponentFixture<UtenteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtenteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
