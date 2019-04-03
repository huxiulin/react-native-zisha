/**
 * 适配IPhoneX
 */

 import { Platform, Dimensions } from "react-native";
 
 // iPhoneX
 const X_WIDTH = 375;
 const X_HEIGHT = 812;

 // screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

//判断当前的是否为IPhoneX手机
export function isIphoneX() {
  return (
    Platform.OS == 'ios' && ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) || (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT));
  )
}

//如果是IphoneX，返回iPhoneX顶部安全局域的样式
export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  } else {
      return regularStyle
  }
}

//在顶部样式中添加以下样式
let TopForPx = 0;
if (isIphoneX()) {
    TopForPx = 88;
} else if (Platform.OS === 'ios') {
    TopForPx = 40;
}
export const TopPx = TopForPx;