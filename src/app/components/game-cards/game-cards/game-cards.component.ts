import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent {
  games = [
    { name: 'DTL TEEN PATTI', image: 'assets/1DAYTEENPATTI1.png', loading: true,url: 'https://dreamh444.com/login' },
    { name: '32 CARDS B', image: 'assets/32cards-min-min.png', loading: true,url: 'https://dreamh444.com/login' },
    { name: '32 CARDS A', image: 'assets/32Cards.png', loading: true,url: 'https://dreamh444.com/login' },
    { name: '1 DAY TEEN PATTI', image: 'assets/IDayTeenPatti-min.png', loading: true,url: 'https://dreamh444.com/login' },
    { name: 'JOKER TEEN PATTI', image: 'assets/JokerTeenPatti-min.png', loading: true,url: 'https://dreamh444.com/login' },
  ];

  onImageLoad(game: any) {
    game.loading = false;
  }
}
