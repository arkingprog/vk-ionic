import { WallPhotoSliderComponent } from './../components/wall-photo-slider/wall-photo-slider';
import { NewNoteComponent } from './../components/new-note/new-note.ts';
import { RandomUsersComponent } from './../components/random-users/random-users.ts';
import { DeclensionPipe } from './../pipes/declension-pipe';
import { UserOnlinePipe } from './../pipes/user-online';
import { UserHeaderComponent } from './../components/user-header/user-header';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { VK } from "../providers/vk";
import { MainPage } from "../pages/main/main";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage, 
    UserHeaderComponent,
    RandomUsersComponent,
    WallPhotoSliderComponent,
    NewNoteComponent,
    UserOnlinePipe,
    DeclensionPipe
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
