import {escape, err} from './util';


export default class Parser {
  /**
   * @param props {object}
   */
  constructor(props) {
    if (typeof props !== 'object') {
      throw {
        name: "init Error"
      }
    }
    const {at, ch, text} = props;
    this.at = typeof at !== 'undefined'? at: 0;  // 文字ｲﾝﾃﾞｯｸｽ
    this.ch = typeof ch !== 'undefined'? ch: ''; // 現在の文字
    this.text = typeof text !== 'undefined'? text: '';
  }

  /**
   * 一文字､次に進める関数
   * パラメーターが指定されていた場合､現在の文字にマッチするか調べ､矛盾があればエラーを返します｡
   *
   * @param c {string}
   * @returns {string}
   */
  next(c) {
    if (c && c !== this.ch) {
      return err(`Expected '${c}' instead of '${this.ch}'`, this.at, this.ch);
    }
    this.ch = this.text.charAt(this.at);
    this.at += 1;
    return this.ch;
  }

  number() {

  }
}