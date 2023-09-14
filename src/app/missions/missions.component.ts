import { Component, OnInit } from '@angular/core';
import { SpaceDataService } from '../space-data.service';

interface Mission {
  name: string;
  description: string;
}

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missions: Mission[] = [];

  constructor(private spaceDataService: SpaceDataService) { }

  ngOnInit(): void {
    this.spaceDataService.getMissions().subscribe((data: any) => {
      if (Array.isArray(data)) {
        this.missions = data;
      }
    });
  }
}
