import { MessageService } from './messages/message.service';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Planet } from 'src/data/planet';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private planetsUrl = 'api/planets';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageServe: MessageService) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Planet[]>('getPlanets', [])),
      );
  }

  getHeroNo404<Data>(id: number): Observable<Planet> {
    const url = `${this.planetsUrl}/${id}`;
    return this.http.get<Planet[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Planet>(`getPlanet id=${id}`))
      );
  }

  getPlanet(id: number): Observable<Planet> {
    const url = `${this.planetsUrl}/${id}`;
    return this.http.get<Planet>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id =${id}`)),
        catchError(this.handleError<Planet>(`getHero ${id}`)),
      )
  }

  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.planetsUrl, planet, this.httpOptions).pipe(
      tap((newPlanet: Planet) => this.log(`added hero w/ id=${newPlanet.id}`)),
      catchError(this.handleError<Planet>('addPlanet'))
    );
  }

  updatePlanet(planet: Planet): Observable<any> {
    return this.http.put(this.planetsUrl, planet, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${planet.id}`)),
      catchError(this.handleError<any>('updatePlanet'))
    );
  }

  deleteHero(id: number): Observable<Planet> {
    const url = `${this.planetsUrl}/${id}`;

    return this.http.delete<Planet>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Planet id=${id}`)),
      catchError(this.handleError<Planet>('deletePlanet'))
    );
  }

  searchPlanets(term: string): Observable<Planet[]> {
    if (!term.trim()) {
      // if not search term, return empty Planet array.
      return of([]);
    }
    return this.http.get<Planet[]>(`${this.planetsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found planets matching "${term}"`) :
        this.log(`no planets matching "${term}"`)),
      catchError(this.handleError<Planet[]>('searchPlanets', []))
    );
  }

  private log(message: string) {
    this.messageServe.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
