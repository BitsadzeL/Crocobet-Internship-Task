import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date();

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
      this.sharedService.updateCurrentDate(this.currentDate);
    }, 1000);
  }
}
