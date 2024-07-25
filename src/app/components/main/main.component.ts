import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentDate!: Date;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentDate$.subscribe(date => {
      this.currentDate = date;
    });
  }
}
