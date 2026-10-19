import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatsList } from './cats-list';

describe('CatsList', () => {
  let component: CatsList;
  let fixture: ComponentFixture<CatsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsList],
    }).compileComponents();

    fixture = TestBed.createComponent(CatsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
