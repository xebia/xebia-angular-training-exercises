import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

const POKE_API_POKEMON_BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(POKE_API_POKEMON_BASEURL + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error('statuscode:', error.status, 'error:', error.error);
    return throwError(() => new Error('Something bad happened.'));
  }
}
