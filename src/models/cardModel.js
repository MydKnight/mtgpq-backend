/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';

const { Schema } = mongoose.Schema;

export const CardSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: 'Enter a card name',
  },
  imgurl: {
    type: String,
  },
  category: [{
    name: String,
    id: Number,
    imgurl: String,
  }],
  type: { type: String },
  rarity: {
    type: String,
  },
  details: {
    type: String,
  },
  cost: {
    type: Number,
  },
  exclusive: {
    type: Boolean,
  },
  lootable: {
    type: Boolean,
  },
  compactName: {
    type: String,
  },
  color1: {
    type: String,
  },
  color2: {
    type: String,
  },
  color3: {
    type: String,
  },
  color4: {
    type: String,
  },
  color5: {
    type: String,
  },
  power: {
    type: Number,
  },
  toughness: {
    type: Number,
  },
  shield: {
    type: Number,
  },
  abilities: [{
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
  }],
  subtypes: [{
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  }],
  link: {
    type: String,
  },
  nightMatched: {
    type: Boolean,
  },
  nightSide: {
    type: Boolean,
  },
  owned: {
    type: Boolean,
  },
});
