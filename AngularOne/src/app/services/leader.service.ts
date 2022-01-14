import { Injectable } from '@angular/core';
import {Leader} from 'src/app/shared/leader';
import {LEADERS} from 'src/app/shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders() : Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeader( ) : Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }

}
