import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListOfArticlesPageComponent } from './edit-list-of-articles-page.component';

describe('EditListOfArticlesPageComponent', () => {
  let component: EditListOfArticlesPageComponent;
  let fixture: ComponentFixture<EditListOfArticlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListOfArticlesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListOfArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
