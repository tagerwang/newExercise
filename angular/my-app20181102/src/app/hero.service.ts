import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
// import { HEROES } from './heroes/mock-heroes';
import { Observable, of, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private _change$ = new Subject<any>();
  private heroesUrl = 'aap/heroes';  // URL to web api
  get subject() {
    return this._change$;
  }
  constructor(
    public messageService: MessageService,
    private http: HttpClient
    ) {
   }
  getHeroes(): Observable<Array<Hero>> { // 获取heroes
    this.messageService.add('HeroService: fetched heroes success');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
    /** GET hero by id. Will 404 if id not found */
    getHero(id: number): Observable<Hero> { // 获取hero
      const url = `${this.heroesUrl}/${id}`;
      console.log(id, name, 'getHero getHero getHero');
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    }

    /** PUT: update the hero on the server */
    updateHero (hero: Hero): Observable<any> { // 更新hero
      return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
    }

    /** POST: add a new hero to the server */
    addHero (hero: Hero): Observable<Hero> { // 新增hero, 实际只传了名字{name} as Hero
      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
    }

    /** DELETE: delete the hero from the server */
    deleteHero (hero: Hero | number): Observable<Hero> { // 删除hero
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = `${this.heroesUrl}/${id}`;

      return this.http.delete<Hero>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> { // 模糊搜索hero
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
    }
}
