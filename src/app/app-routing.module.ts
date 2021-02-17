import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfArticlesPageComponent } from './list-of-articles-page/list-of-articles-page.component';
import { ListOfArticleDetailPageComponent } from './list-of-article-detail-page/list-of-article-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListOfArticlePageComponent } from './my-list-of-article-page/my-list-of-article-page.component';
import { NewListOfArticlePageComponent } from './new-list-of-article-page/new-list-of-article-page.component';
import { EditListOfArticlesPageComponent } from './edit-list-of-articles-page/edit-list-of-articles-page.component';

const routes: Routes = [{
  path:'listings',
  component: ListOfArticlesPageComponent,
  pathMatch: 'full',
},{
  path:'edit-listing/:id',
  component: EditListOfArticlesPageComponent,
},{
  path:'listings/:id',
  component: ListOfArticleDetailPageComponent,
},{
  path:'my-listings',
  component: MyListOfArticlePageComponent,
  pathMatch: 'full',
},{
  path:'contact/:id',
  component: ContactPageComponent,
},{
  path:'new-listing',
  component: NewListOfArticlePageComponent,
},{
  path:'',
  redirectTo: '/listings',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
