import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() deviceSm: boolean;
  heart = faHeart;
  facebook = faFacebook;
  twitter = faTwitter;
  github = faGithub;
  linkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
