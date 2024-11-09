import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {
                id: 'htmlHob1', title: 'dev', salary: '1500'
            },
            {
                id: 'htmlHob2', title: 'tester', salary: '500'
            },
            {
                id: 'htmlHob3', title: 'PM', salary: '5000'
            },
        ]
    }

    addNewJobs = (job) => {
        console.log(`>>>check job from parent:`, job)
        // let curentJobs = this.state.arrJobs;
        // curentJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: curentJobs,
        })

    }
    deleteAJob = (job) => {
        // let curentJobs = this.state.arrJobs;
        // curentJobs = curentJobs.filter(item => item.id !== job.id);
        this.setState({
            // arrJobs: curentJobs,
            arrJobs: [...this.state.arrJobs.filter(item => item.id !== job.id)]
        })
    }

    render() {
        console.log(`>>> call render: `, this.state)
        return (
            <>
                <AddComponent
                    addNewJobs={this.addNewJobs}

                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />


            </>
        )
    }
}


export default MyComponent;