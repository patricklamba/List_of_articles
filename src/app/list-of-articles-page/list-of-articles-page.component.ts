import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-listings'
import { Listing } from '../types'
@Component({
  selector: 'app-list-of-articles-page',
  templateUrl: './list-of-articles-page.component.html',
  styleUrls: ['./list-of-articles-page.component.css']
})
export class ListOfArticlesPageComponent implements OnInit {
  listings: Listing[] = []
  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings ;
  }

}
