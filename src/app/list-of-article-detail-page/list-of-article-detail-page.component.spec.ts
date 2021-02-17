import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfArticleDetailPageComponent } from './list-of-article-detail-page.component';

describe('ListOfArticleDetailPageComponent', () => {
  let component: ListOfArticleDetailPageComponent;
  let fixture: ComponentFixture<ListOfArticleDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfArticleDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfArticleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
