import { VK } from './../../providers/vk';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'wall-photo-slider',
  templateUrl: 'wall-photo-slider.html'
})
export class WallPhotoSliderComponent {

  @Input() count: number;
  photos: any[];
  constructor(public vk: VK) {

    this.vk.api('photos.getAll',
      {'skip_hidden':1,'count':25}).subscribe(data => { 
        this.photos=data.items;
        console.log(this.photos)
      });
  }

}
