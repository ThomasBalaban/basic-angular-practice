import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = "no server was create"
  serverName: string
  serverCreated: boolean = false

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was creatied Name is ' + this.serverName
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    this.serverName = <HTMLInputElement>event.target.value
  }

}
