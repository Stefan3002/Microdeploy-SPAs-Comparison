import { Component } from '@angular/core';
import {ParallaxComponent} from '../parallax/parallax.component';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    ParallaxComponent,
    ButtonComponent
  ],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  parallaxImgs = [
    {
      img: 'assets/parallaxImg-min.webp',
      text: 'Sneakers',
      position: 'bottom'
    },
    {
      img: 'assets/parallaxImg2-min.webp',
      text: 'Jackets',
      position: 'center'
    },
    {
      img: 'assets/parallaxImg3-min.webp',
      text: 'Hats',
      position: 'top'
    },
    {
      img: 'assets/parallaxImg4-min.webp',
      text: 'Women',
      position: 'top'
    },
    {
      img: 'assets/parallaxImg5-min.webp',
      text: 'Men',
      position: 'top'
    }
  ];
}
