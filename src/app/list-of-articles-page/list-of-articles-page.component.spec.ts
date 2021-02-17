import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfArticlesPageComponent } from './list-of-articles-page.component';

describe('ListOfArticlesPageComponent', () => {
  let component: ListOfArticlesPageComponent;
  let fixture: ComponentFixture<ListOfArticlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfArticlesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
