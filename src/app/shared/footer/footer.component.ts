import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anho: number = new Date().getFullYear();

  constructor(
    public infoPageService:InfoPageService
  ) { }

  ngOnInit(): void {
  }

}
