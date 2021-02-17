import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLsitOfArticlePageComponent } from './new-lsit-of-article-page.component';

describe('NewLsitOfArticlePageComponent', () => {
  let component: NewLsitOfArticlePageComponent;
  let fixture: ComponentFixture<NewLsitOfArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLsitOfArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLsitOfArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
