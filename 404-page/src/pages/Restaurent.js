import React, {Component} from 'react';
import Single_rest from"../../../../../practise/Zomato/zomato-react-app/src/child-components/single_rest"

class Restaurent extends Component {
    constructor(){
        super()
        this.listt=[{
            rating:3.0,
            name:"paradise",
            address:"paatnee"
        },
        {
            rating:4.1,
            name:"shabad",
            address:"charminar"
        },
        {
            rating:4.5,
            name:"mehfil",
            address:"hitec city"
        }]

    }

    render() {
        
      return(

          
      <div className="resta-list">
                    <p>from rest</p>

           <Single_rest listofplace={this.listt}/>
                                                                                    



      </div>);
    }
}

        
        
     


export default Restaurent;

