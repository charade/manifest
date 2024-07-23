export const ModalRoutesOutlet = 'modal-outlet';

export namespace RoutesEnum {
  export enum Main {
    Root = '',
    Login = 'login',
    Signup = 'signup',
  }

  const modalsRoutesPrefix = 'redirecting-modal';

  export enum Modal {
    Root = modalsRoutesPrefix,
    Login = `${modalsRoutesPrefix}/login`,
    SignUp = `${modalsRoutesPrefix}/signup`,
  }
}
