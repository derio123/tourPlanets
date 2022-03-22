import { MessageService } from './../service/messages/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageServe: MessageService) { }

  ngOnInit(): void {
  }

}
