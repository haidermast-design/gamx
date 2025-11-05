import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GameCardsComponent } from './components/game-cards/game-cards/game-cards.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,GameCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dreamx-app';
}
