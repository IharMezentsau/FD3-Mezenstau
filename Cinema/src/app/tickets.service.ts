import { Injectable } from "@angular/core";

@Injectable()
export class TicketsService {

  private soldTickets: number = 0;
  private freeTickets: number = 10;
  private message: string = "";

  public buyTickets(num: number): void {
    let ticket;
    if ((this.freeTickets - num >= 0) && (num != 0) && (num != undefined) && (num != null)) {
      ticket = num === 1 ? "Ваше место:" : "Ваши места: ";
      for (let i = 0; i < num; i++) {
        this.soldTickets++;
        this.freeTickets--;
        ticket = `${ticket} ${this.soldTickets}`
      }
    } else {
      ticket = "Билетов нет";
    }
    this.message = ticket;
  }

  public getSoldTickets(): number {
    return this.soldTickets;
  }

  public getFreeTickets(): number {
    return this.freeTickets;
  }

  public getMessage(): string {
    return this.message;
  }

}
