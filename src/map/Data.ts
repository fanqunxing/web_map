import Utils from '../lib/common';

enum DataType {
  object = "object",
  string = "string"
};

class Data {

  private type: DataType;

  private data: any;

  public constructor(data: any, isParse: boolean) {
    if (isParse) {
      let result: any = Utils.toJSONObject(data);
      this.type = result.type;
      if (this.type === DataType.object) {
        this.data = Utils.toJSONObject(result.data);
      } else {
        this.data = result.data;
      }
    } else {
      if (Utils.isString(data)) {
        this.type = DataType.string;
      } else {
        this.type = DataType.object;
      }
      this.data = data;
    }
  };

  public toString(): string {
    let json: object = {
      type: this.type,
      data: this.data
    };
    return Utils.toJSON(json);
  };

  public getData(): DataType {
    return this.data;
  }

}

export default Data;
