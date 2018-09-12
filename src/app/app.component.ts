import {Component, OnInit} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mon-blog';
  posts: Post[] = new Array();

   ngOnInit() {
    for ( let i = 1; i <= 3 ; i++) {
      this.posts.push(new Post('mon post numéro ' + i));
    }
  }
}
