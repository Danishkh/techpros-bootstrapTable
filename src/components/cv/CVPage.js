import React from 'react';
import {connect} from 'react-redux';
import image0 from './img0.png';
import image1 from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import image4 from './img4.png';
import image5 from './img5.png';
import image6 from './img6.png';
import image7 from './img7.png';
import image8 from './img8.png';

class CVPage extends React.Component {
    constructor(props,context){
     super(props,context);
     this.state = {
         cv : { epost : null}
     };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onEmailChange(event) {
        const cv = this.state.cv;
        cv.epost = event.target.value;
        this.setState({cv: cv});
    }

    onClickSave(event) {
       // alert('Saving ${this.state.cv.epost}');
    }
    render() {
        return (
            <div className="container">
                <img  src={image0} />
                <img  src={image1} />
                <img  src={image2} />
                <img  src={image3} />
                <img  src={image4} />
                <img  src={image5} />
                <img  src={image6} />
                <img  src={image7} />
                <img  src={image8} />
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
        return {cv: state.cv};
}

function mapDispatchToProps(state,ownProps){

}

export default connect(mapStateToProps,mapDispatchToProps)(CVPage);

/*

     <h1>CV</h1>
                <h2>Add CV</h2>
                <input
                    type="text"
                    onChange={this.onEmailChange}
                    value={this.state.epost} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
 */