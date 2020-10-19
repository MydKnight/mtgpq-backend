import mongoose from 'mongoose';
import { CardSchema } from '../models/cardModel';

const Card = mongoose.model('Card', CardSchema);

export const addNewCard = (req, res) => {
  const newCard = new Card(req.body);

  newCard.save((err, card) => {
    if (err) {
      res.send(err);
    }
    res.json(card);
  });
};

export const getCards = (req, res) => {
  Card.find({}, (err, card) => {
    if (err) {
      res.send(err);
    }
    res.json(card);
  });
};

export const getCardWithID = (req, res) => {
  Card.findById(req.params.cardID, (err, card) => {
    if (err) {
      res.send(err);
    }
    res.json(card);
  });
};

export const updateCard = (req, res) => {
  Card.findOneAndUpdate({ _id: req.params.cardID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, card) => {
      if (err) {
        res.send(err);
      }
      res.json(card);
    });
};

export const deleteCard = (req, res) => {
  Card.deleteOne({ _id: req.params.cardID }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully Deleted Card' });
  });
};
