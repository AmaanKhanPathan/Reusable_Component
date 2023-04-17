import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() isLiked! : boolean
  @Output() emmitLikeStatus : EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onLikeDislike(){
    this.isLiked = !this.isLiked
    this.emmitLikeStatus.emit(this.isLiked)
  }

}
