import alt from '../alt';
import CreateVMActions from '../actions/CreateVMActions';

class CreateVMStore{

    constructor() {
        this.bindActions(CreateVMActions);
        this.images = '';
        this.flavor = '';
        this.imageList=[];
        this.flavorList=[];
    }

    onCreateVMSuccess(successMessage) {

    }

    onCreateVMFail(errorMessage) {

    }
    onGetImagesSuccess(data) {
        this.imageList = data;
    }

    onGetImagesFail(errorMessage) {
        console.log(' On Get images '+errorMessage);
    }

    onGetFlavorsSuccess(data) {
        this.flavorList = data;
    }

    onGetFlavorsFail(errorMessage) {
        console.log(' On Get flavors '+errorMessage);
    }

    onUpdateImage(event) {
        this.image = event.target.value;
    }

    onUpdateFlavour(event) {
        this.flavor = event.target.value;
    }

    onInvalidImage() {
        this.imageValidationState = 'has-error';
        this.validationMessage = 'Please select a valid image';
    }

    onInvalidFlavour() {
        this.flavorValidationState = 'has-error';
        this.validationMessage = 'Please select a valid Flavor'
    }

}

export default alt.createStore(CreateVMStore);