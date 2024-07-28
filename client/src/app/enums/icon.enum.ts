import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export enum IconEnum {
  Close,
}

export namespace IconEnum {
  export const value = new Map<IconEnum, IconDefinition>([
    [IconEnum.Close, faClose],
  ]);
}
