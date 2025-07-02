import {
  responsiveWidth as wp,
  responsiveHeight as hp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const w = (percent) => wp(percent); 
const h = (percent) => hp(percent); 
const s = (percent) => rf(percent); 

export { w, h, s };
