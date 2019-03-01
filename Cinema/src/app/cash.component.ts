import { Component, Input, Output, EventEmitter} from "@angular/core";
import {TicketsService} from "./tickets.service";

@Component({
  //moduleId: module.id,
  selector: "cash",
  templateUrl: "cash.component.html",
  styleUrls: ["cash.component.css"]
})

export class CashComponent {
  @Input("type-cash")
  private typeCash: string;

  @Input("countTickets")
  private countTickets: number;

  @Output("countTicketsChange")
  private countTicketsOutputEE = new EventEmitter<number>();

  private message: string;

  constructor(private tickets: TicketsService) {
  }

  buyTickets(): void {
    this.tickets.buyTickets(this.getCountTickets());
    this.message = this.tickets.getMessage();
  }

  getMessage(): string {
    return this.message;
  }

  setCountTickets(num: number): void {
    this.countTicketsOutputEE.emit(num);
  }

  getCountTickets(): number {
    return this.countTickets;
  }

  getTypeCash(): string {
    return this.typeCash;
  }
}


