import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'userOnline',
  pure: false
})
@Injectable()
export class UserOnlinePipe implements PipeTransform {
  transform(value: number, lastSeen: any): string {
    moment.locale('ru');
    if (lastSeen) {
      return value > 0 ? 'Онлайн' : ` был в сети ${moment(lastSeen * 1000).fromNow()}`;
    }
  }
}
