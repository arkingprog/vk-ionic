import { VK } from './../../providers/vk';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'wall-photo-slider',
  templateUrl: 'wall-photo-slider.html'
})
export class WallPhotoSliderComponent implements AfterViewInit {
  @Input() count: number;
  photos: any[];
  swipeOptions: any;

  constructor(public vk: VK) {
    this.swipeOptions = {
      slidesPerView: 'auto',
      spaceBetween: 2, 
      freeMode: true,
      zoom: false
    };


    this.vk.api('photos.getAll',
      { 'skip_hidden': 1, 'count': 25 }).subscribe(data => {
        this.photos = data.items;
        this.photos.forEach((value, index, array) => {
          value.x = this.calcNewSize(value.width,value.height,100);
        })
      });
  }

  private calcNewSize(width: number, height: number, heightContainer: number): number {
    return Math.round(heightContainer*width/height);
  }

  ngAfterViewInit() {
  }

}
