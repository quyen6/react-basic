import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {
                id: 'htmlHob1', title: 'dev', salary: '1500$'
            },
            {
                id: 'htmlHob2', title: 'tester', salary: '500$'
            },
            {
                id: 'htmlHob3', title: 'PM', salary: '5000$'
            },
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`>>> check data inout: `, this.state)
    }
    render() {
        console.log(`>>> call render: `, this.state)
        return (
            <>
                <form >
                    <label >First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label >Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'21'}
                    add={'Binh Dinh'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}


export default MyComponent;