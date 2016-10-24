import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/uac/login';
import { LocaleChooser } from '../components/locale/locale-chooser';
import { TranslateModule } from 'ng2-translate/ng2-translate';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    LocaleChooser
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: []
})
export class AppModule { }
