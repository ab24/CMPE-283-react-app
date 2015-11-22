import alt from '../alt';

class CreateVMActions {
    constructor() {
        this.generateActions('createVMSuccess', 'createVMFail', 'getImagesSuccess', 'getImagesFail', 'getFlavorsSuccess', 'getFlavorsFail', 'updateImage', 'updateFlavor', 'invalidImage', 'invalidFlavor');
    }

    createVM(image, flavour) {
        $.ajax({
            type: 'POST',
            url: '/api/create',
            data: { name: name, gender: gender }
        }).done(data => {
            this.actions.createVMSuccess(data.message);
        }).fail(jqXhr => {
            this.actions.createVMFail(jqXhr.responseJSON.message);
        });
    }

    getImages() {
        console.log('Inside action get servers');
        $.ajax({
            type: 'GET',
            url: '/images'
        }).done(data => {
            this.actions.getImagesSuccess(data);
        }).fail(jqXhr => {
            this.actions.getImagesFail(jqXhr.responseJSON.message);
        });
    }

    getFlavors() {
        console.log('Inside action get servers');
        $.ajax({
            type: 'GET',
            url: '/flavors'
        }).done(data => {
            this.actions.getFlavorsSuccess(data);
        }).fail(jqXhr => {
            this.actions.getFlavorsFail(jqXhr.responseJSON.message);
        });
    }
}

export default alt.createActions(CreateVMActions);

//# sourceMappingURL=CreateVMActions-compiled.js.map