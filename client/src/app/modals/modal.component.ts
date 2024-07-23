import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  providers: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [RouterOutlet],
})
export class ModalComponent {}
