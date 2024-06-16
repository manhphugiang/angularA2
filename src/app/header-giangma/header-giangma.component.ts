import { Component, Input} from '@angular/core';
import { A2Personal } from '../giangmaInterface';

@Component({
  selector: 'app-header-giangma',
  templateUrl: './header-giangma.component.html',
  styleUrl: './header-giangma.component.css'
})
export class HeaderGiangmaComponent {
  @Input() giangmaPersonal!: A2Personal;

}
