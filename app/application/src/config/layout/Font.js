/**
 * 设置字体
 */

import designMachine from './DesignMachine';
import scale from './Scale';

const designMachineScale = Scale();

export default ( size, isDynamic = false ) => {
  let sl = designMachineScale;
  if(isDynamic === true){
    sl = Scale();
  }
  size = Math.round((size * sl + 0.5));
  return size / designMachine.pixel;
}