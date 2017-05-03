
import { AbstractControl } from "@angular/forms";

export function ValidateSidFormat(control: AbstractControl) {
  // // 驗證成功
  // return null;
  // // 驗證失敗
  // return { 'fieldName': 'error status'};
  if(control.value[0] == 'A' && control.value[1] == '2') {
    return null;
  } else {
    return {
      'sidformat': true,
      'sidformat_errormsg': '身分證字號格是錯誤'
    };
  }
}
