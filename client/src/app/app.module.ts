import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Action, StoreModule, ActionReducer, MetaReducer, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtModule } from '@auth0/angular-jwt';

import { localStorageSync } from 'ngrx-store-localstorage';

import * as UserDetailsReducer from './store/reducers/user-details.reducer';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ChatComponent,
  HomeComponent,
  JoinRoomModalComponent,
  LoginComponent,
  MessageComponent,
  RoomModalComponent,
  SidebarComponent,
  SignupComponent,
} from './components';

import {
  ApiService,
  SocketIoService,
  LocalStorageService,
  AuthGuardService
} from './services';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

function getToken() {
  return localStorage.getItem('token');
}

const STORE_KEYS_TO_PERSIST = ['userDetails'];

export interface AppState {
  userDetails: UserDetailsReducer.Details;
}

export const reducers: ActionReducerMap<AppState> = {
  userDetails: UserDetailsReducer.reducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST,
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<AppState, Action>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    MessageComponent,
    RoomModalComponent,
    JoinRoomModalComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['gentle-mesa-55326.herokuapp.com'],
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    SocketIoService,
    LocalStorageService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
