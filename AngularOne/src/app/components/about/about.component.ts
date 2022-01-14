import { Component, OnInit } from '@angular/core';
import {Leader} from 'src/app/shared/leader';
import {LeaderService} from 'src/app/services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders : Leader[];

  constructor(private leaderService : LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
        .then((leaders) => this.leaders = leaders);
  }

}
