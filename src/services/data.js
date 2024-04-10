import parse from 'html-react-parser';
import data from './data.json';

export const { options } = data;

const normalSkin = {
  pawn: data.normal_pieces.pawn,
  bishop: data.normal_pieces.bishop,
  knight: data.normal_pieces.knight,
  rook: data.normal_pieces.rook,
  queen: data.normal_pieces.queen,
  king: data.normal_pieces.king
};

export const findImage = htmlCode => {
  return parse(normalSkin[htmlCode]);
};
