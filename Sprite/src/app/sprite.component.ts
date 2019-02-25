import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  @Input("url")
  public url: string;

  @Input("offset-x")
  public offsetX: number;

  @Input("offset-y")
  public offsetY: number;

  @Input("width")
  public width: number;

  @Input("height")
  public height: number;

  onClickEvent(e): void {
    console.log(e);
    this.cardChangeEE.emit();
  }

  @Output("cardOutput")
  private cardChangeEE = new EventEmitter<object>();

}
