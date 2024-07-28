import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  mapContainerId = 'map-container';

  #mapObj: L.Map;

  readonly #mapMaxZoom = 20;
  readonly #mapMinZoom = 5;

  ngAfterViewInit(): void {
    this.#mapObj = L.map(this.mapContainerId, {
      minZoom: this.#mapMinZoom,
      zoomControl: false,
    }).setView([48.86182, 2.3444151], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: this.#mapMaxZoom,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#mapObj);
  }
}
