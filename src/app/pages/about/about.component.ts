import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public infoPageService:InfoPageService) { }

  ngOnInit(): void {
    // console.log("pitoo", this.infoPageService);
  }

}
