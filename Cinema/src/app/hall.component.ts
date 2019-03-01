import {Component, Input, OnInit} from "@angular/core";

import { TicketsService }  from "./tickets.service";

@Component({
  //moduleId: module.id,
  selector: "hall",
  templateUrl: "hall.component.html",
  styleUrls: ["hall.component.css"]
})

export class HallComponent{

  constructor(private tickets: TicketsService) {
  }

  getFreeTickets(): number {
    return this.tickets.getFreeTickets();
  }

  getSoldTickets(): number {
    return this.tickets.getSoldTickets();
  }

}



