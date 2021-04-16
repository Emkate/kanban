import { Pipe, PipeTransform } from '@angular/core';
import { users } from '../data.mock';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'getUser'
})
export class GetUserPipe implements PipeTransform {
  transform(value: number): User | undefined {
    return users.find(el => el.id === value);
  }
}
