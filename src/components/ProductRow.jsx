import React, {Component} from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.outStockStyle = {
            color: 'red'
        }
    }
    
    render() {
        let products = {...this.props.products};
        
        if (this.props.state.keysToFilter !== "") 
            products.data = products.data.filter(data => data.name.toLowerCase().includes(this.props.state.keysToFilter.toLowerCase()));

        if (this.props.state.isMarked === true) 
            products.data = products.data.filter(data => data.stocked === true)
        
        return(
            <div>
                <table className="table-container">
                    <tbody>
                        {  
                            products.data.map((data, index) => {
                                if(data.stocked === false) {
                                    return <tr style={this.outStockStyle} key={index}><td>{data.name}</td><td>{data.price}</td></tr>
                                } else {
                                    return <tr key={index}><td>{data.name}</td><td>{data.price}</td></tr>
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductRow;