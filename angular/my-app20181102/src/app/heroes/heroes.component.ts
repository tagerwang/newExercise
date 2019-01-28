import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
  // styles: ['body,h1,h2,p{background:yellow;}']
})
export class HeroesComponent implements OnInit, OnDestroy {
  public $change: any;
  public selectedHero: Hero;
  heroes: Hero[];
  // heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.heroService.messageService);
    // console.log(this.selectedHero);
  }
  constructor(private heroService: HeroService) {
    // if (this.$change) {
    //   this.$change.unsubscribe();
    // }
    this.$change = this.heroService.subject.subscribe(res => {
      console.log('observerB值为：' + res);
    });
    // this.heroes = this.heroService.getHeroes();
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  expression () {
    this.heroService.subject.next('observerB');
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void { // 新增hero
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void { // 删除
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  ngOnDestroy (): void {
    // this.$change.unsubscribe();
  }
}
