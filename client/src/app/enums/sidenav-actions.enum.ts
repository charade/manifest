import { MainRoutesEnum } from './routes.enum';

export enum SideNavActionsEnum {
  AccountActions,
  Activities,
  Discover,
}

export enum SideNavActionsButtonsEnum {
  Preferences = 'Préférences',
  Language = 'Langue',
  Logout = 'Déconnexion',
  MyCourses = 'Mes cours',
  Octagon = ' Octogone  🤺',
  Discover = 'Des cours à la carte  📌',
}

// allow to define action name and to disable button action
export type SideNavAction = {
  label: SideNavActionsButtonsEnum;
  active?: boolean;
};

export namespace SideNavActionsEnum {
  export const allSections = Object.freeze([
    SideNavActionsEnum.Discover,
    SideNavActionsEnum.Activities,
    SideNavActionsEnum.AccountActions,
  ]);

  export const getSideNavSectionsLabel = new Map<SideNavActionsEnum, string>([
    [SideNavActionsEnum.AccountActions, 'Compte'],
    [SideNavActionsEnum.Activities, 'Activités'],
    [SideNavActionsEnum.Discover, 'Découverte'],
  ]);

  const accountSectionActions = Object.freeze([
    SideNavActionsButtonsEnum.Preferences,
    SideNavActionsButtonsEnum.Language,
    SideNavActionsButtonsEnum.Logout,
  ]);

  const activitiesSectionActions = Object.freeze([
    SideNavActionsButtonsEnum.MyCourses,
    SideNavActionsButtonsEnum.Octagon,
  ]);

  const discoverSectionActions = Object.freeze([
    SideNavActionsButtonsEnum.Discover,
  ]);

  const convertToActionProps = (
    actions: readonly SideNavActionsButtonsEnum[],
    route: string
  ) =>
    actions.map((actionLabel) => {
      return {
        label: actionLabel,
        active: route === '/' + sideNavRoute.get(actionLabel), // styling active route side nav button
      };
    });

  export const getActionsButtons = (route: string) =>
    new Map<SideNavActionsEnum, SideNavAction[]>([
      [
        SideNavActionsEnum.AccountActions,
        convertToActionProps(accountSectionActions, route),
      ],
      [
        SideNavActionsEnum.Activities,
        convertToActionProps(activitiesSectionActions, route),
      ],
      [
        SideNavActionsEnum.Discover,
        convertToActionProps(discoverSectionActions, route),
      ],
    ]);

  // list the actions that can be deactivated after navigation if matching the current route
  export const sideNavRoute = new Map<
    SideNavActionsButtonsEnum,
    MainRoutesEnum
  >([
    [SideNavActionsButtonsEnum.Discover, MainRoutesEnum.Feed],
    [SideNavActionsButtonsEnum.Octagon, MainRoutesEnum.Octagon],
    [SideNavActionsButtonsEnum.MyCourses, MainRoutesEnum.MyCourses],
    [SideNavActionsButtonsEnum.Preferences, MainRoutesEnum.Preferences],
  ]);
}
