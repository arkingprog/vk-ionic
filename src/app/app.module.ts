import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {
  DataSliderComponent,
  NewNoteComponent,
  RandomUsersComponent,
  UserHeaderComponent,
  WallPhotoSliderComponent,
  WallComponent,
  WallPostComponent,
} from "../components";

import {
  DeclensionPipe,
  UserOnlinePipe
} from './../pipes';

import {
  HomePage,
  LoginPage,
  MainPage
} from '../pages';

import {VK} from "../providers/vk";

const components = [
  UserHeaderComponent,
  RandomUsersComponent,
  WallPhotoSliderComponent,
  NewNoteComponent,
  DataSliderComponent,
  WallComponent,
  WallPostComponent,
];
const pipes = [
  UserOnlinePipe,
  DeclensionPipe,
]
const pages = [
  HomePage,
  LoginPage,
  MainPage
];
@NgModule({
  declarations: [
    MyApp,
    pages,
    pipes,
    components
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage
  ],
  providers: [
    VK
  ]
})
export class AppModule {
}
