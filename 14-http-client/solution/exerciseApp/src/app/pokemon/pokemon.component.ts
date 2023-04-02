import { Component } from '@angular/core';
import { BehaviorSubject, map, Subject, switchMap } from 'rxjs';
import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  private idSubject = new BehaviorSubject(1);
  private pokemonSubject = new Subject<Pokemon>();
  name$ = this.pokemonSubject.pipe(map((p) => p.name));
  sprite$ = this.pokemonSubject.pipe(map((p) => p.sprites.front_default));

  constructor(private ps: PokemonService) {
    this.idSubject
      .pipe(switchMap((id) => this.ps.getPokemon(id)))
      .subscribe(this.pokemonSubject);
  }

  next() {
    this.idSubject.next(this.idSubject.getValue() + 1);
  }
}
