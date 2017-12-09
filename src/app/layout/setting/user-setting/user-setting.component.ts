import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {User} from '../../../shared/model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Users} from '../../../shared/mock';
import {ProductSettingModalComponent} from '../product-setting/product-setting-modal/product-setting-modal.component';
import {UserSettingModalComponent} from './user-setting-modal/user-setting-modal.component';
import {UserRoles} from '../../../shared/model/config.model';

@Component({
    selector: 'app-user-setting',
    templateUrl: './user-setting.component.html',
    styleUrls: ['./user-setting.component.scss'],
    animations: [routerTransition()]
})
export class UserSettingComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'user-setting-pagination',
        itemsPerPage: 3,
        currentPage: 1
    };

    users: User[] = [];
    filterUsers: User[] = [];
    user: User;
    constructor(
        private modalService: NgbModal
    ) {
        for (const u of Users) {
            const user = new User();
            this.users.push(user.fromJson(u));
        }
        Object.assign(this.filterUsers, this.users);
    }

    ngOnInit() {
    }

    public createUser() {
        this.user = new User();
        this.user.initialize();
        const modalRef = this.modalService.open(UserSettingModalComponent);
        modalRef.componentInstance.user = this.user;
        modalRef.componentInstance.headerText = '添加用户';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.userAdd.subscribe(newUser => {
            this.onUserCreate(newUser);
            modalRef.dismiss();
        });
    }

    private onUserCreate(user: User) {
        this.users.unshift(user);
        Object.assign(this.filterUsers, this.users);
    }

    public viewUser(user: User) {
        const selectedRole = [UserRoles[user.role]];
        console.log(selectedRole);
        const modalRef = this.modalService.open(UserSettingModalComponent);
        modalRef.componentInstance.user = user;
        modalRef.componentInstance.headerText = '查看用户';
        modalRef.componentInstance.disabled = true;
        modalRef.componentInstance.selectedRole = selectedRole;
    }

    public editUser(user: User) {
        const selectedRole = [UserRoles[user.role]];
        const modalRef = this.modalService.open(UserSettingModalComponent);
        modalRef.componentInstance.user = user;
        modalRef.componentInstance.headerText = '编辑用户';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.selectedRole = selectedRole;
        modalRef.componentInstance.userAdd.subscribe(editUser => {
            this.onUserUpdate(editUser);
            modalRef.dismiss();
        });
    }

    private onUserUpdate(user: User) {
        this.filterUsers = this.filterUsers.filter(u => u.uuid !== user.uuid);
        this.filterUsers.unshift(user);
    }

    public deleteUser(user: User) {
        this.filterUsers = this.filterUsers.filter(u => u.uuid !== user.uuid);
    }

    public searchUser(event: any) {

        const searchTerm = event.target.value;
        if (searchTerm !== '') {
            // let findProducts = this.products;
            this.filterUsers = [];
            const findUsers = this.users.filter(
                u => u.getFullName().indexOf(searchTerm) !== -1
            );
            Object.assign(this.filterUsers, findUsers);
        } else {
            Object.assign(this.filterUsers, this.users);
        }
    }

}
