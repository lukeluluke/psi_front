import { Pipe, PipeTransform } from '@angular/core';
import { UserRoles } from '../model/config.model';

@Pipe ( {name: 'UserRoleText'} )

export class UserRolePipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        return UserRoles[value];
    }
}
