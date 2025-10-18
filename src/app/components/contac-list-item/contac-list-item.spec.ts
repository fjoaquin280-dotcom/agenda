import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacListItem } from './contac-list-item';

describe('ContacListItem', () => {
  let component: ContacListItem;
  let fixture: ComponentFixture<ContacListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
