import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  public $change: any;
  constructor(private heroService: HeroService) {
    console.log(this.$change)
    // if (this.$change) {
    //   this.$change.unsubscribe();
    // }
    this.$change = this.heroService.subject.subscribe(res => {
      console.log('observerA值为：' + res);
    });
    // this.heroService.subject.subscribe({
    //   next: (v) => console.log('observerA值为: ' + v)
    // });
  }
  expression () {
    this.heroService.subject.next('observerA123');
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
