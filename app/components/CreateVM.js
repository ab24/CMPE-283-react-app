var React = require('react');
var ReactBootStrap = require('react-bootstrap');
var Button = ReactBootStrap.Button;
var ButtonGroup= ReactBootStrap.ButtonGroup;


import CreateVMStore from '../stores/CreateVMStore';
import CreateVMActions from '../actions/CreateVMActions';

class CreateVM extends React.Component {

    constructor(props){
        super(props);
        this.state = CreateVMStore.getState();
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        CreateVMStore.listen(this.onChange);
        CreateVMActions.getFlavors();
        CreateVMActions.getImages();
    }

    componentWillUnmount() {
        CreateVMStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var image = this.state.image;
        var flavor = this.state.flavor;
        if (!image) {
            CreateVMActions.invalidImage();
        }
        if (!flavor) {
            CreateVMActions.invalidFlavor();
        }
        if (image) {
            CreateVMActions.createVM();
        }
    }

    renderImageLists(){
        return this.state.imageList.map((image,index)=>{
                return(
                 <div>

                     <small>{image.name}</small>
                </div>
                )
            });
    }

    renderFlavoursList(){
        return  this.state.flavorList.map((flavour,index)=>{
                return(
                    <div>
                        <small>{flavour.name}</small>
                    </div>
                )
            })

    }

    render() {
        var images = this.renderImageLists();
        var flavors = this.renderFlavoursList();
        return (

            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <div>
                        <h1>Images:</h1>
                        <ButtonGroup name="sda"> sdas
                            <Button bsStyle="primary" id="werewr" name="werwer">dasd</Button>
                        </ButtonGroup>
                        <div>
                            {images}
                        </div>
                    </div>
                    <div>
                        <h1>Flavors:</h1>
                        <div>
                            {flavors}
                        </div>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
};

export default CreateVM;