import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf, NgStyle} from '@angular/common';  // Import RouterLink

@Component({
  selector: 'app-parallax',
  standalone: true,  // This makes the component standalone
  imports: [RouterLink, NgStyle, NgForOf],  // Import RouterLink here
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent {
  @Input() data: { img: string, text: string, position: string }[] = [];
}
