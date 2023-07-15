import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../data/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero | undefined;
  fileName = '';

  constructor(
    private route: ActivatedRoute,
    private heroServe: HeroService,
    private location: Location,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroServe.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroServe.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);
      const upload$ = this.http.post("/api/thumbnail-upload", formData);
      upload$.subscribe();
    }
  }
}

