
/**
 * 安卓权限
 */

import React,{Component} from 'react';
import {
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';

export default class PermissionAndroidView extends Component {
  /*
    * 弹出提示框向用户请求某项权限。返回一个promise，最终值为用户是否同意了权限申请的布尔值。
    * 其中rationale参数是可选的，其结构为包含title和message)的对象。
    * 此方法会和系统协商，是弹出系统内置的权限申请对话框，
    * 还是显示rationale中的信息以向用户进行解释。
    * */
  show(data) {
    ToastAndroid.show(data,ToastAndroid.SHORT)
  }
  
  static async requestMultiplePermission() {
    try {
        const permissions = [
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]
        //返回得是对象类型
        const granteds = await PermissionsAndroid.requestMultiple(permissions)
        var data = "是否同意地址权限: "
        if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
            data = data + "是\n"
        } else {
            data = data + "否\n"
        }
        data = data+"是否同意相机权限: "
        if (granteds["android.permission.CAMERA"] === "granted") {
            data = data + "是\n"
        } else {
            data = data + "否\n"
        }
        data = data+"是否同意存储权限: "
        if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
            data = data + "是\n"
        } else {
            data = data + "否\n"
        }
        data = data+"是否同意录音权限: "
        if (granteds["android.permission.RECORD_AUDIO"] === "granted") {
            data = data + "是\n"
        } else {
            data = data + "否\n"
        }
        this.show(data)
    } catch (err) {
        this.show(err.toString())
    }
  }
}