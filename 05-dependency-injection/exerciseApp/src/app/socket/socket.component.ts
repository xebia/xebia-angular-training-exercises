import { Component, Optional } from '@angular/core';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent {
  constructor(@Optional() public powerService?: PowerService) {}
}
