import { Component } from '@angular/core';
import { Ireels } from './shared/models/reels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusableComponent';

  reels : Array<Ireels> = [
    {
      title : "Lorem Epsum1",
      likeCount : 1234,
      isLike : true,
      id : 1
    },
    {
      title : "Lorem Epsum2",
      likeCount : 2168,
      isLike : false,
      id : 2
    },
    {
      title : "Lorem Epsum3",
      likeCount : 4892,
      isLike : false,
      id : 3
    },
    {
      title : "Lorem Epsum4",
      likeCount : 6782,
      isLike : true,
      id : 4
    },
    
  ]
  getLikeStatus(likeStatus:any, id : number){
    console.log(likeStatus, id);
    this.reels.forEach(reel =>{
      if(reel.id == id){
        if(likeStatus){
          reel.likeCount++
          }else{
            reel.likeCount--
          }
      }

    })
    

  }
}
