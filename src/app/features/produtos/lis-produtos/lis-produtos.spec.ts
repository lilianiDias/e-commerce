import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisProdutos } from './lis-produtos';

describe('LisProdutos', () => {
  let component: LisProdutos;
  let fixture: ComponentFixture<LisProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(LisProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
