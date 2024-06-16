import { Component, Input } from '@angular/core';
import { A2Personal } from '../giangmaInterface';
@Component({
  selector: 'app-footer-giangma',
  templateUrl: './footer-giangma.component.html',
  styleUrl: './footer-giangma.component.css'
})
export class FooterGiangmaComponent {
  @Input() giangmaPersonal!: A2Personal;
}
