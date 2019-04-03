/**
 * 缩放
 */

import { Dimensions } from 'react-native';
import designMachine from './DesignMachine';

export default () => {
  return Math.min(
      (Dimensions.get('window').height) / (designMachine.height / designMachine.pixel),
      (Dimensions.get('window').width) / (designMachine.width / designMachine.pixel)
  );
}