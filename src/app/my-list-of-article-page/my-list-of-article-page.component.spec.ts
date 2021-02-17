import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListOfArticlePageComponent } from './my-list-of-article-page.component';

describe('MyListOfArticlePageComponent', () => {
  let component: MyListOfArticlePageComponent;
  let fixture: ComponentFixture<MyListOfArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListOfArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListOfArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
