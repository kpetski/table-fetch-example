import React, { Component } from 'react';

class TableHeader extends Component
{
    render() 
    {      
        console.log('+++ IN TABLE HEADER CLASS +++') 
        const headerRow = this.props.headerLabels.map((label, index) => {
            return (
                <th key={index}>
                    {label}
                </th>
            )
        })

        return (      
            <thead>
            <tr>
                {headerRow}
            </tr>
        </thead>
        )   
    }   
  }
  export default TableHeader

