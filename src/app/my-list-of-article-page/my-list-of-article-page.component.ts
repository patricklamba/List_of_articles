import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-listings';
import { Listing } from '../types';

@Component({
  selector: 'app-my-list-of-article-page',
  templateUrl: './my-list-of-article-page.component.html',
  styleUrls: ['./my-list-of-article-page.component.css']
})
export class MyListOfArticlePageComponent implements OnInit {
  listings: Listing[] = []
  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId){
    alert(`Deleting your listing with id ${listingId}`)
  }

}
