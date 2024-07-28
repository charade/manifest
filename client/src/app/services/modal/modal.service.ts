import { Injectable, Injector, OnDestroy, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { OverlayUtils } from './modal.utils';

@Injectable()
export class ModalService implements OnDestroy {
  #afterCloseEvent: () => void;

  #currentOverlayRef: OverlayRef;
  #subscription: Subscription;
  #overlay = inject(Overlay);

  ngOnDestroy(): void {
    if (this.#subscription) {
      this.#subscription.unsubscribe();
    }
    this.#currentOverlayRef.detach();
  }

  open<T = {}>(
    overlayContent: ComponentType<any>,
    overlayData?:
      | OverlayUtils.DataConfig<T>
      | Partial<OverlayUtils.DataConfig<T>>
  ): void {
    // close every open modal before open new one
    this.close();

    const overlayConfig = {
      ...OverlayUtils.DEFAULT_CONFIG(this.#overlay, overlayData?.origin),
      ...overlayData?.config,
      scrollStrategy: OverlayUtils.getScrollStrategy(this.#overlay).get(
        overlayData?.scrollStrategy
      ),
    };

    const overlayRef = this.#overlay.create(overlayConfig);

    const injector = Injector.create({
      providers: [
        {
          provide: OverlayUtils.OVERLAY_DATA_TOKEN,
          useValue: overlayData?.data,
        },
        {
          provide: OverlayRef,
          useValue: overlayRef,
        },
      ],
    });

    const portal = new ComponentPortal(
      overlayContent as ComponentType<any>,
      overlayData?.viewContainerRef,
      injector
    );

    overlayRef.attach(portal);

    this.#currentOverlayRef = overlayRef;

    /**
     * there are some modals user is not allowed
     * to close by itself
     * so we need to prevent closing by clicking on backdrop for those ones
     */
    if (overlayData?.closeOnBackDropClick) {
      this.#subscription = overlayRef
        .backdropClick()
        .subscribe(() => this.close());
    }
  }

  close(): void {
    if (this.#currentOverlayRef) {
      this.#currentOverlayRef.dispose();
      this.#currentOverlayRef.detach();
      // this.#afterCloseEvent();
    }
  }
}
