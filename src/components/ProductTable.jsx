import React from 'react';

import ProductRow from './ProductRow';

function ProductTable (props) {
    return (
        <div>   
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
            <ProductRow products={props.products} state={props.state}/>
        </div>
    );
}

export default ProductTable;