import {
  addNewCard, getCards, getCardWithID, updateCard, deleteCard,
} from '../controllers/cardController';

const routes = (app) => {
  app.route('/card')
    .get(getCards)

    .post(addNewCard);

  app.route('/card/:cardID')
    .get(getCardWithID)

    .put(updateCard)

    .delete(deleteCard);
};

export default routes;
