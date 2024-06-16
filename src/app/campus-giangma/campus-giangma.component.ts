import { Component, Input } from '@angular/core';
import { Campus } from '../giangmaInterface';

@Component({
  selector: 'app-campus-giangma',
  templateUrl: './campus-giangma.component.html',
  styleUrl: './campus-giangma.component.css'
})
export class CampusGiangmaComponent {
  @Input() campusData991685007!: Campus[];

  campus = '';
  campusArray: { campus: string; street: string; city: string }[] = [];


  ngOnInit() {
    for (let x of this.campusData991685007) {
      if (x.campus === '') {
        this.campusArray.push({
          "campus": x.campus,
          "street": x.street,
          "city": x.city
        });
      }
    }
  }



  buildArray(campus: string) {
    this.campusArray = [];

    // Build the campusArray based on selected campus
    for (let x of this.campusData991685007) {
      if (x.campus === campus) {
        this.campusArray.push({
          campus: x.campus,
          street: x.street,
          city: x.city
        });
      }
    }
  }
}




