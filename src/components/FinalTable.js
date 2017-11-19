import React, { Component } from 'react'
import TableHeader from './TableHeader'
import ReactLoading from 'react-loading'

const headerLabels = ['ID', 'First Name', 'Last Name', 'Email', 'Gender', 'IP Address']

class FinalTable extends Component {
    constructor() {
        super()
        this.state = {
            data: undefined,
            spinner: 0
        }
    }

    componentDidMount() {
        //Indicate that we are waiting on data..
        this.setState({
            spinner: 1,
            data: undefined
        })

        //Make call to get data
        if (typeof fetch !== 'undefined') {
            console.log('we have fetch')
            fetch('https://demo3087851.mockable.io')
                //fetch('https://demo3087851.mockable_invalid.io') //use invalid url to see error message
                .then((response) => response.json())
                .then((json) => {
                    console.log('----- SETTING DATA -----')
                    console.log(json)
                    this.setState({
                        spinner: 0,
                        data: json, //our JSON should now be availave in our state variable
                        isError: false
                    });
                })
                .catch(err => {
                    this.setState({
                        spinner: 0,
                        data: 'Uh Oh... unable to fetch data',  //switch fetch line to an invalid URL to see error
                        isError: true
                    });
                })
        }


    }

    getTable() {
        console.log('*** IN GET TABLE ***')

        let tableBody =
            <tbody>
                {this.getTableRows()}
            </tbody>

        const table =
            <table className="table table-striped">
                <TableHeader headerLabels={headerLabels} />
                {tableBody}
            </table>

        return table
    }

    getTableRows() {
        //console.log('*** IN GET TABLE ROWS ***')
        return (this.state.data || []).map((person, index) => {


            return (
                <tr key={index}>
                    <td>
                        {person.id || '--'}
                    </td>
                    <td>
                        {person.first_name || '--'}
                    </td>
                    <td>
                        {person.last_name || '--'}
                    </td>
                    <td>
                        {person.email || '--'}
                    </td>
                    <td>
                        {person.gender || '--'}
                    </td>
                    <td>
                        {person.ip_address || '--'}
                    </td>
                </tr>
            );
        });
    }


    render() {
        //console.log('-----IN RENDER -----')  
        return (
            <div>
                {(this.state.spinner === 0 && this.state.isError === false) &&
                    //We have the data, an there wasn't an error
                    //hence display the table
                    this.getTable()

                }
                {this.state.spinner > 0 &&
                    <div className="text-center">
                        <ReactLoading className="center" type="spinningBubbles" color="#444" />
                    </div>
                }
                {this.state.isError === true &&
                    <div className="alert-danger">
                        {/* We failed to get the data */}
                        {this.state.data}
                    </div>
                }
            </div>
        )


    }

}

export default FinalTable