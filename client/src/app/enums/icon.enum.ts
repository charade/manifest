import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faClose,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

export enum IconEnum {
  Close,
  Plus,
  ArrowRight,
  Avatar = 'avatar',
}

export namespace IconEnum {
  export const value = new Map<IconEnum, IconDefinition>([
    [IconEnum.Close, faClose],
    [IconEnum.Plus, faPlus],
    [IconEnum.ArrowRight, faArrowRight],
  ]);
}
