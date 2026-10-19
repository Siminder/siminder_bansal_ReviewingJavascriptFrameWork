import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatsListItems } from './cats-list-items';

describe('CatsListItems', () => {
  let component: CatsListItems;
  let fixture: ComponentFixture<CatsListItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsListItems],
    }).compileComponents();

    fixture = TestBed.createComponent(CatsListItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
