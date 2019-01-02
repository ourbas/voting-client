import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { VoteService } from './vote.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  @Input() pet: string;
  @Input() img: string;

  nbVote = '--';
  constructor(private voteService: VoteService) { }

  ngOnInit() {
    interval(2000).subscribe(_ => this.refreshVote());
  }

  refreshVote() {
    this.voteService.getVote(this.pet).subscribe(nb => this.nbVote = nb);
  }

  public addVote(): void {
    this.voteService.addVote(this.pet);
  }
}
