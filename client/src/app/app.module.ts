import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MessageComponent } from './components/message/message.component';
import { RoomModalComponent } from './components/add-room-modal/add-room-modal.component';
import { ApiService, SocketIoService, LocalStorageService } from './services';
import { AuthGuard } from './services/auth/auth.guard';
import { JoinRoomModalComponent } from './components/join-room-modal/join-room-modal.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

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
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    SocketIoService,
    LocalStorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
