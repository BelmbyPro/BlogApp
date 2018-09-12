import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


  @Input() postItem: Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(cmpt: number) {
    this.postItem.loveIts += cmpt;
  }

}
