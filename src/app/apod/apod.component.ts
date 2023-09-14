import { Component, OnInit } from '@angular/core';
import { SpaceDataService } from '../space-data.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  apodData: any;
  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

  constructor(private apodService: SpaceDataService) { }

  ngOnInit(): void {
    this.loadApodData();
  }

  loadApodData(): void {
    this.apodService.getApod().subscribe(data => {
      this.apodData = data;
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
}
