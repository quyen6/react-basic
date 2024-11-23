import React from 'react';
// import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/ft-logo.png';
import { connect } from 'react-redux';

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 3000)
    // }

    handleDeleteUser = (user) => {
        console.log('check user delete', user);
        this.props.deleteUeRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log('check props, ', this.props);
        let listUsers = this.props.dataRedux;

        return (
            <>

                <div>
                    Hello Home
                </div>
                <div >
                    <img src={logo} style={{ width: '500px' }} />
                </div >
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}- {item.name} <span onClick={() => this.handleDeleteUser(item)}>X</span> &nbsp;

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUeRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));