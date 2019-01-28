import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // public tager: Hero = hero;
  heroes: Hero[] = [];
  @Input() hero: Hero;
  @Input() tager: Hero={id:1, name:'tager'};
  constructor(
    private router:Router,
    private routerInfo: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {

  }

  ngOnInit() {
    this.getHeroes()
    console.log(this.router, this.routerInfo)

  }
  getDetail(heroes){
    this.routerInfo.params.subscribe(item => {
      this.hero = heroes.find((val) => val.id == item.id)
      console.log(heroes, item, this.hero)
    })
  }
  getHeroes(): void {
    // console.log(this.routerInfo.snapshot.paramMap.get('id'))
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.getDetail(heroes)
      });
    const id = +this.routerInfo.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => {
      console.log(hero, 'getSingleHero')
    });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
