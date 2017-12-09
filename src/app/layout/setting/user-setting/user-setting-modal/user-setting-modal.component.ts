import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../shared/model';
import {UserRoles} from '../../../../shared/model/config.model';

@Component({
  selector: 'app-user-setting-modal',
  templateUrl: './user-setting-modal.component.html',
  styleUrls: ['./user-setting-modal.component.scss']
})
export class UserSettingModalComponent {
    @Input() user: User;
    @Input() disabled: boolean = true;
    @Input() headerText: string;
    @Input() selectedRole = [];
    @Output() userAdd = new EventEmitter<User>();

    roles = [
        {
            id: User.TYPE_SALES,
            text: UserRoles[User.TYPE_SALES]
        },
        {
            id: User.TYPE_ACCOUNTANT,
            text: UserRoles[User.TYPE_ACCOUNTANT]
        }
    ];
  constructor(
      public activeModal: NgbActiveModal
  ) { }

    /**
     * When close modal popup
     * @returns {string}
     */
    closeModal() {
        this.activeModal.dismiss('Close');
    }

    selectRole(value: any) {
        this.user.role = value.id;
    }

    refreshValue() {

    }

    removed() {

    }

    typed() {

    }

    updateUser(user: User) {
        if (user && user.role) {
            this.userAdd.emit(user);
        } else {
            alert('请输入完整用户信息');
        }
    }

}
