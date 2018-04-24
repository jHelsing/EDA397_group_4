import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PatientPage } from '../pages/patient/patient';
import { PatientDetailPage } from '../pages/patient-detail/patient-detail';
import { NurseListPage } from '../pages/nurse-list/nurse-list';
import { DoctorListPage } from '../pages/doctor-list/doctor-list';
import { NurseProvider } from '../providers/nurse/nurse';
import { LoginPage } from '../pages/login/login';
import { AdminTabs } from '../pages/admin-tabs/admin-tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import firebaseConfig from '../config/firebase.config';
import { DoctorRegistration } from '../pages/doctorRegistration/doctorRegistration';
import { PatientProvider } from '../providers/patient/patient';
import { LoginProvider } from '../providers/login/login';
import { AuxProvider } from '../providers/aux';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    DoctorRegistration,
    PatientPage,
    PatientDetailPage,
    AdminTabs,
    NurseListPage,
    DoctorListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DoctorRegistration,
    PatientPage,
    PatientDetailPage,
    AdminTabs,
    NurseListPage,
    DoctorListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NurseProvider,
    PatientProvider,
    LoginProvider,
    AuxProvider,
  ],
})
export class AppModule {}
