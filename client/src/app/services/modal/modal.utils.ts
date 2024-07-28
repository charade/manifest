import { Overlay, OverlayConfig, ScrollStrategy } from '@angular/cdk/overlay';
import { InjectionToken, ViewContainerRef } from '@angular/core';

export enum ScrollStrategyEnum {
  Noop = 1,
  Block,
  Reposition,
  Close,
}

export namespace OverlayUtils {
  export function OVERLAY_DATA_TOKEN<T>() {
    return new InjectionToken<T>('data_token');
  }

  export const getScrollStrategy = (overlay: Overlay) =>
    new Map<ScrollStrategyEnum, ScrollStrategy>([
      [ScrollStrategyEnum.Block, overlay.scrollStrategies.block()],
      [ScrollStrategyEnum.Noop, overlay.scrollStrategies.noop()],
      [ScrollStrategyEnum.Reposition, overlay.scrollStrategies.reposition()],
      [ScrollStrategyEnum.Close, overlay.scrollStrategies.close()],
    ]);

  export interface DataConfig<T = {}> {
    viewContainerRef: ViewContainerRef;
    config?: OverlayConfig;
    customData?: T;
    afterCloseEvent?: () => void;
    origin?: Element;
    scrollStrategy?: ScrollStrategyEnum;
    data?: T;
    closeOnBackDropClick?: boolean;
  }

  export const DEFAULT_CONFIG = (
    overlay: Overlay,
    origin?: Element
  ): OverlayConfig => ({
    width: '10rem',
    height: '10rem',
    hasBackdrop: true,
    scrollStrategy: overlay.scrollStrategies.reposition(),
    positionStrategy: origin
      ? overlay
          .position()
          .flexibleConnectedTo(origin)
          .withPositions([
            {
              originX: 'center',
              originY: 'bottom',
              overlayX: 'center',
              overlayY: 'top',
              offsetY: 3,
            },
          ])
      : overlay.position().global().centerHorizontally().centerVertically(),
    panelClass: 'default-modal-panel-class',
    backdropClass: 'default-modal-backdrop-class',
  });
}
