import { Component, OnInit } from '@angular/core';
import { VK } from "../../providers/vk";

@Component({
  selector: 'data-slider',
  templateUrl: 'data-slider.html'
})

export class DataSliderComponent implements OnInit {
  swipeOptions: any;
  video: any;
  audio: any;
  pages: any = [];
  groups: any = [];
  doc: any;

  constructor(public vk: VK) {
    this.swipeOptions = {
      slidesPerView: 'auto',
      spaceBetween: 2,
      freeMode: true,
    };



  }
  ngOnInit() {
    this.vk.api('video.get', { 'count': 1 }).subscribe((data) => {
      this.video = data;
    });
    this.vk.api('audio.get', { 'count': 1 }).subscribe((data) => {
      this.audio = data;
    });
    this.vk.api('groups.get', { 'count': 6, 'extended': 1, 'filter': 'publics' }).subscribe((data) => {
      this.pages = data;
    });
    this.vk.api('groups.get', { 'count': 6, 'extended': 1, 'filter': 'groups' }).subscribe((data) => {
      this.groups = data;
    });
    this.vk.api('docs.get', { 'count': 1 }).subscribe((data) => {
      this.doc = data;
    });
  }

}
