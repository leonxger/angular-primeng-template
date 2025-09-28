import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionPanel, AccordionHeader, AccordionContent, Accordion } from "primeng/accordion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccordionPanel, AccordionHeader, AccordionContent, Accordion],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-primeng');
}
