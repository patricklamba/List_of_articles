import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //access the value parameter of url
import { fakeListings } from '../fake-listings';
import { Listing } from '../types';

@Component({
  selector: 'app-list-of-article-detail-page',
  templateUrl: './list-of-article-detail-page.component.html',
  styleUrls: ['./list-of-article-detail-page.component.css']
})
export class ListOfArticleDetailPageComponent implements OnInit {
  listing: Listing;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
