import React, { Component } from 'react';
import {connect} from 'react-redux'

class SnackDept extends Component {
    render() {
        // console.log('from snackdept component: ', this.props.data)
        return (
            <div>
                <h1>The Snack Department</h1>
                <ul>
                    {
                        this.props.data.map((snack, index) => (
                            <li key={index}>{snack}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.snacks.snacksData
    }
}

export default connect(mapStateToProps)(SnackDept);