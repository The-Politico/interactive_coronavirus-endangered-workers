import path from 'path';
import { pib as meta } from 'package.json';

export default {
  fbook: {
    card_title: 'Who is most at risk in the coronavirus crisis: 24 million of the lowest-income workers',
    card_description: 'Cashiers, nursing assistants, paramedics: These people are at highest risk of exposure to coronavirus — and make a median wage of less than $35,000 a year',
  },
  twitter: {
    card_title: 'Who is most at risk in the coronavirus crisis: 24 million of the lowest-income workers',
    share_tweet: '',
    card_description: 'Cashiers, nursing assistants, paramedics: These people are at highest risk of exposure to coronavirus — and make a median wage of less than $35,000 a year',
  },
  image: {
    url: `https://www.politico.com/${path.join(meta.publishPath, 'media/share2.jpg')}`,
    alt: '<Text>',
    type: 'image/jpeg',
    width: '600',
    height: '300',
  },
};
