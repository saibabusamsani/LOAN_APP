import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
   responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const pLeft = (value) => ({ paddingLeft: wp(value) });
const pRight = (value) => ({ paddingRight: wp(value) });
const pTop = (value) => ({ paddingTop: hp(value) });
const pBottom = (value) => ({ paddingBottom: hp(value) });
const pHorizontal = (value) => ({ paddingHorizontal: wp(value) });
const pVertical = (value) => ({ paddingVertical: hp(value) });
const padding = (wVal, hVal) => ({
  paddingHorizontal: wp(wVal),
  paddingVertical: hp(hVal),
});


const mLeft = (value) => ({ marginLeft: wp(value) });
const mRight = (value) => ({ marginRight: wp(value) });
const mTop = (value) => ({ marginTop: hp(value) });
const mBottom = (value) => ({ marginBottom: hp(value) });
const mHorizontal = (value) => ({ marginHorizontal: wp(value) });
const mVertical = (value) => ({ marginVertical: hp(value) });
const margin = (wVal, hVal) => ({
  marginHorizontal: wp(wVal),
  marginVertical: hp(hVal),
});

const w = (value) => wp(value); 
const h = (value) => hp(value);
const s = (value) => rf(value);

export {
  pLeft,
  pRight,
  pTop,
  pBottom,
  pHorizontal,
  pVertical,
  padding,
  mLeft,
  mRight,
  mTop,
  mBottom,
  mHorizontal,
  mVertical,
  margin,
  w,
  h,
  s
};
