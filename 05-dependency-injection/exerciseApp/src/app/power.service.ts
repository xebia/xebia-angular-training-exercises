import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class PowerService {
  plug$ = of(true);
}
