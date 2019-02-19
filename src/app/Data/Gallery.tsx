// There must be better way of doing this..
import toffee from '../../assets/photos/toffee.jpg';
import climbing from '../../assets/photos/climbing.png';
import succulentplanters from '../../assets/photos/succulentplanters.jpg';
import scubadiving from '../../assets/photos/scubadiving.jpg';
import sketchup from '../../assets/photos/sketchup.png';
import desk from '../../assets/photos/desk.jpg';
import bread from '../../assets/photos/bread.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

library.add(faLeaf);

export const Gallery = [
  {
    src: toffee,
    caption: 'Toffee + Toffee\'s human'
  },
  {
    src: climbing,
    caption: 'Climbing @ abp'
  },
  {
    src: succulentplanters,
    caption: 'Handmade Planters',
    icon: faLeaf
  },
  {
    src: scubadiving,
    caption: 'Diving in Curaçao'
  },
  {
    src: sketchup,
    caption: 'Learning Sketchup'
  },
  {
    src: desk,
    caption: 'Sketchup desk IRL'
  },
  {
    src: bread,
    caption: 'Learning to bake sourdough bread from scratch'
  }
];