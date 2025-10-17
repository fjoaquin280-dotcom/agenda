import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsPages } from './contact-details-pages';

describe('ContactDetailsPages', () => {
  let component: ContactDetailsPages;
  let fixture: ComponentFixture<ContactDetailsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailsPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailsPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
