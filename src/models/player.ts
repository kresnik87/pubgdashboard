export class Player {
  private _id: number;
  private _name: string;
  private _shardId: string;
  private _patchVersion: string;
  private _titleId: string;

  get shardId(): string {
    return this._shardId;
  }

  set shardId(value: string) {
    this._shardId = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get patchVersion(): string {
    return this._patchVersion;
  }

  set patchVersion(value: string) {
    this._patchVersion = value;
  }

  get titleId(): string {
    return this._titleId;
  }

  set titleId(value: string) {
    this._titleId = value;
  }

}
