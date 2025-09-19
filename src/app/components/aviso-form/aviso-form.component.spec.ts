import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisoFormComponent } from './aviso-form.component';

describe('AvisoFormComponent', () => {
  let component: AvisoFormComponent;
  let fixture: ComponentFixture<AvisoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
