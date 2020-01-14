import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category = 'all-around';
  teamAScore = 0;
  teamBScore = 0;
  currentCategory = '';
  team1 = {
    name: '',
    english: 0,
    'all-around': 0,
    history: 0,
    math: 0,
    science: 0
  }
  team2 = {
    name: '',
    english: 0,
    'all-around': 0,
    history: 0,
    math: 0,
    science: 0
  };

  switchCategory(category) {
    this.category = category;
    this.teamAScore = this.team1[this.category];
    this.teamBScore = this.team2[this.category];
  }

  add5(team) {
    if (team == 1) {
      this.team1[this.category] += 5;
      this.teamAScore += 5;
    }
    else {
      this.team2[this.category] += 5;
      this.teamBScore += 5;
    }
  }
  minus2(team) {
    if (team == 1) {
      this.team1[this.category] -= 2;
      this.teamAScore -= 2;
    }
    else {
      this.team2[this.category] -= 2;
      this.teamBScore -= 2;
    }
  }

  constructor() { }
  showCategory() {
    if (this.category === 'all-around') {
      return 'All Around';
    } else {
      return this.capitalize(this.category);
    }
  }

  capitalize(text: string): string {
    const firstCharacter = text.slice(0, 1).toUpperCase();
    return firstCharacter + text.slice(1);
  }
  ngOnInit() {
  }

}
