import { AfterViewInit, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '@services';
import * as L from 'leaflet';
import { tap } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  providers: [UserService],
})
export class MapComponent implements AfterViewInit {
  mapContainerId = 'map-container';

  #mapObj: L.Map;
  #userService = inject(UserService);

  readonly #mapMaxZoom = 20;
  readonly #mapMinZoom = 5;

  #userLoginPosition = toSignal(this.#userService.getLoginPosition());

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

    setTimeout(
      () =>
        this.#mapObj.flyTo(
          [this.#userLoginPosition().lat, this.#userLoginPosition().lng],
          this.#mapMaxZoom - 8,
          { duration: 4.8, easeLinearity: 2 }
        ),
      500
    );
  }
}
