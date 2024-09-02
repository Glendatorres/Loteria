import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalotaComponent } from './balota.component';

describe('BalotaComponent', () => {
  let component: BalotaComponent;
  let fixture: ComponentFixture<BalotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
