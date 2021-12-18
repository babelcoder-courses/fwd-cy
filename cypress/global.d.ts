import { getByTestID, findByTestID, interceptApi } from './support/commands';

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestID: typeof getByTestID;
      findByTestID: (
        selector: string
      ) => Cypress.Chainable<JQuery<HTMLElement>>;
      interceptApi: typeof interceptApi;
    }
  }
}
