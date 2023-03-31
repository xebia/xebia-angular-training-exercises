import { Component } from '@angular/core';
import { CheckedService } from '../checked.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-do-it-all',
  templateUrl: './do-it-all.component.html',
  styleUrls: ['./do-it-all.component.css'],
})
export class DoItAllComponent {
  constructor(
    public timeService: TimeService,
    public checkedService: CheckedService
  ) {}
}
