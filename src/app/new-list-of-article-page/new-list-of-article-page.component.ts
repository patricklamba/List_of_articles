import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list-of-article-page',
  templateUrl: './new-list-of-article-page.component.html',
  styleUrls: ['./new-list-of-article-page.component.css']
})
export class NewListOfArticlePageComponent implements OnInit {
  name: string = '';
  description:string = '';
  price: string = '';

  constructor(
     private router : Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    alert(`creating a new listing: name is ${this.name}`);
    this.router.navigateByUrl('/my-listings')
  }

}
