import { Component } from '@angular/core';
import { IpcService } from './ipc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  name: string;
  constructor(private readonly _ipc: IpcService) {
    this._ipc.on('pong', (event: Electron.IpcMessageEvent) => {
      console.log('pong');
    });

  }
  closeApp() {
    console.log("CLOSE BUTTON CLICKED")
    this._ipc.send('ping');
  }
}
