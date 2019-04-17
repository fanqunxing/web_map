export class Utils {

  public static isNull(elem: any): boolean {
    let bFlag = false;
    if (elem === null || elem === undefined) {
      bFlag = true;
    };
    return bFlag;
  };

  public static isObject(obj: any): boolean {
    let result: boolean = false;
    if (typeof (obj) === 'object') {
      result = true;
    }
    return result;
  };

  public static isJSON(str: string): boolean {
    let result: boolean = true;
    try {
      JSON.parse(str);
    } catch (error) {
      result = false;
    };
    return result;
  };

  public static isJSONObject(obj: object): boolean {
    let result: boolean = true;
    try {
      JSON.stringify(obj);
    } catch (error) {
      result = false;
    }
    return result;
  };

  public static toJSONObject(str: any): object {
    let result: object = {};
    if (Utils.isObject(str)) {
      return str;
    };
    try {
      result = JSON.parse(str);
    } catch (error) {};
    return result;
  };

  public static toJSON(obj: object): string {
    let result: string = '';
    try {
      result = JSON.stringify(obj);
    } catch (error) {};
    return result;
  };

  public static isString(obj: any): boolean {
    let result: boolean = false;
    if (typeof (obj) === 'string') {
      result = true;
    }
    return result;
  };

  public static uniq(array: any[]): any[] {
    var temp = [];
    for (var i = 0; i < array.length; i++) {
      if (temp.indexOf(array[i]) == -1) {
        temp.push(array[i]);
      }
    }
    return temp;
  }

}
export default Utils;