import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import snackUpdate from '../actions/snackDeptUpdate';

class SnackDept extends Component {


    handleQuantity = (operator, index) => {
        this.props.snackUpdate(operator, index)
    }

    render() {
        // console.log('from snackdept component: ', this.props.data)
        return (
            <div>
                <h1>The Snack Department</h1>
                <ul>
                    {
                        this.props.data.map((snack, index) => (
                            <div key={index}>
                                <li>{snack.food} - {snack.quantity}</li>
                                <input type="button" value="+" onClick={() => this.handleQuantity('+', index)} />
                                <input type="button" value="-" onClick={() => this.handleQuantity('-', index)}/>
                            </div>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.snacks
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        snackUpdate: snackUpdate
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackDept);