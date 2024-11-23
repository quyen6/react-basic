import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './ListUser.scss'
class ListUser extends React.Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then(res => {
        //         console.log(`>>>>check res`, res.data.data)
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
        // console.log(`>>>>check res`, res.data.data)
    }
    handleViewDetilUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className='list-user-container'>
                <div className='title'>
                    Fetch all list Users

                </div>
                <div className='list-user-content'>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (

                                <div className='child' key={item.id} onClick={() => this.handleViewDetilUser(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })

                    }

                </div>


            </div>
        )
    }
}
export default withRouter(ListUser);