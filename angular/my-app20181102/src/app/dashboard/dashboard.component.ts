import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  
})
export class DashboardComponent implements OnInit, OnDestroy {
  private _testGetOrSet:any = 0;
  heroes: Hero[] = [];
  public $change: any;
  constructor(private heroService: HeroService) {
    console.log(this.$change)
    // if (this.$change) {
    //   this.$change.unsubscribe();
    // }
    this.$change = this.heroService.subject.pipe(share()).subscribe(res => {
      console.log('observerA值为：' + res);
    });
    // this.$change = this.heroService.subject.subscribe(res => {
    //   console.log('observerA值为：' + res);
    // });
    // this.heroService.subject.subscribe({
    //   next: (v) => console.log('observerA值为: ' + v)
    // });
  }
  expression () {
    this.heroService.subject.next('observerA123');
  }
  get testGetOrSet () {
    return this._testGetOrSet;
  }
  set testGetOrSet (item) {
    console.log(item);
    this._testGetOrSet = item + 10;
  }
  expression1 () {
    console.log('get click:', this.testGetOrSet);
  }
  expression2 () {
    this.testGetOrSet += 1;
    console.log('set click:', this.testGetOrSet);
  }
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(id: Number): void {
  //   this.selectedHero = hero;
  //   console.log(this.heroService.messageService);
  //   // console.log(this.selectedHero);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(2, 6));
  }
  ngOnDestroy (): void {
    // this.heroService.subject.unsubscribe();
    // this.$change.unsubscribe();
  }
}
