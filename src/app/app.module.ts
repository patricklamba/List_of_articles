import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfArticlesPageComponent } from './list-of-articles-page/list-of-articles-page.component';
import { ListOfArticleDetailPageComponent } from './list-of-article-detail-page/list-of-article-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListOfArticlePageComponent } from './my-list-of-article-page/my-list-of-article-page.component';
import { NewListOfArticlePageComponent } from './new-list-of-article-page/new-list-of-article-page.component';
import { EditListOfArticlesPageComponent } from './edit-list-of-articles-page/edit-list-of-articles-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfArticlesPageComponent,
    ListOfArticleDetailPageComponent,
    ContactPageComponent,
    MyListOfArticlePageComponent,
    NewListOfArticlePageComponent,
    EditListOfArticlesPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
