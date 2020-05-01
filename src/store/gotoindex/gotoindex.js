import { observable, decorate } from 'mobx';

class StatusHolder {
    status = 'on';
    statusSwitcher = () => {
        this.status = this.status === 'off' ? 'on' : 'off';
    };
}

decorate(StatusHolder, {
    status: observable,
});

const statusHolder = new StatusHolder();
export default statusHolder;
