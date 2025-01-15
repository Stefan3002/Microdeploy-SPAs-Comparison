import { Component, Input } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [
    NgStyle
  ],
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() clickHandler: () => void = () => {};  // Default empty function
  @Input() color: string = 'black'; // Default color
  @Input() fontSize: string = '1em'; // Default font size
  @Input() dividers: boolean = false; // Default no divider
}
