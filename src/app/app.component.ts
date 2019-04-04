import { Component, EventEmitter, OnInit } from "@angular/core";
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor() {}
  ngOnInit() {}

  modalOpen = () =>
    this.modalActions.emit({ action: "modal", params: ["open"] });

  modalClose = () =>
    this.modalActions.emit({ action: "modal", params: ["close"] });

  jumpToTop = event => window.scroll(0, 0);
}
