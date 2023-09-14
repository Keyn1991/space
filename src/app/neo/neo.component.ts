import { Component, OnInit } from '@angular/core';
import { SpaceDataService } from '../space-data.service';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.css']
})
export class NeoComponent implements OnInit {
  neoFeedData: any;
  neoLookupData: any;
  neoBrowseData: any;

  constructor(private spaceDataService: SpaceDataService) {}

  ngOnInit() {
    this.getNeoFeed('2023-09-14', '2023-09-15');
    this.getNeoLookup(2000433); // Приклад виклику методу з правильним ID
    this.getNeoBrowse();
  }

  getNeoFeed(startDate: string, endDate: string) {
    this.spaceDataService.getNeoFeed(startDate, endDate).subscribe(data => {
      this.neoFeedData = data;
    });
  }

  getNeoLookup(asteroidId: number) {
    this.spaceDataService.getNeoLookup(asteroidId).subscribe(data => {
      this.neoLookupData = data;
    });
  }

  getNeoBrowse() {
    this.spaceDataService.getNeoBrowse().subscribe(data => {
      this.neoBrowseData = data;
    });
  }
}
