import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

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
  constructor() {
    // TODO: inject the HttpClient in the constructor
  }

  getPokemon(id: number): Observable<Pokemon> {
    // TODO:
    // - Use the HttpClient to perform a GET request on the PokeAPI.
    // - Create a URL based on the POKE_API_POKEMON_BASEURL and the id.
    // - Use the generic parameter to make it return an object of type Pokemon.
    // - Catch errors with this.handleError
  }

  handleError(error: HttpErrorResponse) {
    console.error('statuscode:', error.status, 'error:', error.error);
    return throwError(() => new Error('Something bad happened.'));
  }
}
