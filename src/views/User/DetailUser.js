import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}

            })
            console.log(`>>>check res`, res)
        }

    }
    handleBack = () => {
        this.props.history.push(`/user`)
    }
    render() {
        let { user } = this.state;
        let isEmptyobj = Object.keys(user).length === 0;

        return (
            <>
                <div>Hello Detail User with id: {this.props.match.params.id} </div>
                {
                    isEmptyobj === false &&
                    <>
                        <div>
                            User's Name: {user.first_name} {user.last_name}
                        </div>
                        <div>
                            User's Mail: {user.email}
                        </div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                    </>
                }
                <button onClick={() => this.handleBack()}>Back</button>
            </>
        )
    }
}

export default withRouter(DetailUser);

// export default DetailUser;