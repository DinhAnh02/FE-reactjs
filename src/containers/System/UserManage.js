import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser, createNewUserSevice, deleteUserSevice, editUserSevice } from '../../services/userSevice';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from "../../utils/emitter"
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()

    }

    getAllUserFromReact = async () => {
        let response = await getAllUser('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserSevice(data)
            if (response && response.errCode !== 0) {
                alert(response.errmessege)

            } else {

                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }

        } catch (e) {
            console.log(e)
        }
        console.log(data)
    }

    handleDeleteUser = async (user) => {
        console.log('click me:', user)
        try {
            let res = await deleteUserSevice(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                alert(res.errmessege)
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = (user) => {
        console.log('check user edit:', user)

        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })

    }
    doEditUser = async (user) => {
        try {
            let res = await editUserSevice(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUserFromReact()
            } else {
                alert(res.errCode)
            }
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        console.log(this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFomrParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}

                />
                {
                    this.state.isOpenModalEditUser &&

                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFomrParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}

                    />
                }
                <div className='title text-center'>Manage users with DinhAnh02</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleNewUser()}
                    > Add New User <i className="fas fa-plus"></i></button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>FirtName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {
                                arrUsers && arrUsers.map((item, indext) => {
                                    return (
                                        <tr key={indext}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit' onClick={() => this.handleEditUser(item)} ><i className="fas fa-pencil-alt"></i></button>
                                                <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
