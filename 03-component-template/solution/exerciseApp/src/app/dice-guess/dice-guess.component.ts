import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-guess',
  templateUrl: './dice-guess.component.html',
  styleUrls: ['./dice-guess.component.css'],
})
export class DiceGuessComponent {
  wins = 0;
  chosenValue = 1;
  rolledDice?: number;

  updateValue(event: Event) {
    return Number((event.target as HTMLInputElement).value);
  }

  rollDice() {
    this.rolledDice = Math.floor(Math.random() * 6) + 1;
    if (this.rolledDice === this.chosenValue) {
      this.wins++;
    }
  }
}
