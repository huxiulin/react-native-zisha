/**
 * 大小缩放比例
 */

import { PixelRatio } from 'react-native';

export default {
    width: 750,
    height: 1334,
    pixel: 2,
    currFontScale: PixelRatio.getFontScale(), //返回当前渲染设备字体大小缩放比例
    currPixel: PixelRatio.get()    //当前渲染设备的像素密度
};