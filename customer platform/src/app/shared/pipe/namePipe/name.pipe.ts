import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shortName'
})
export class NamePipe implements PipeTransform {
  transform(value: any, name: string): any {
    if (value.includes(" ")){
      const transformString = value.split(' ')
      let appdataString = transformString[1].slice(0, --transformString.length)
      let normalizeName = transformString[0].toString() + ' ' + appdataString + '.'
      return normalizeName
    }
    return value
  }

  constructor() {
  }
}
