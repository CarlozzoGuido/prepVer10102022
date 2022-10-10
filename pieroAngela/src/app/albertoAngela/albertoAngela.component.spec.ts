import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertoAngelaComponent } from './albertoAngela.component';

describe('AlbertoAngelComponent', () => {
  let component: AlbertoAngelaComponent;
  let fixture: ComponentFixture<AlbertoAngelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbertoAngelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbertoAngelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
