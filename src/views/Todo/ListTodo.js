import React from "react";
import "./ListTodo.scss"
import AddTodo from './AddTodo'
import { toast } from 'react-toastify';
import Color from "../HOC/Color";
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Doing housework' },
            { id: 'todo3', title: 'Watching video' },
        ],
        editTodo: {

        }
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Nhập thành công!!!")
    }
    handleDeleteTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos.filter(item => item.id !== todo.id)]
        })
        toast.success(`Đã xóa thành công!!!`)
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyobj = Object.keys(editTodo).length === 0;
        if (isEmptyobj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos];
            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);

            //Log object to Console.
            console.log("Before update: ", listTodoCopy[objIndex])

            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success(`Cập nhật thành công!!!`)
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyobj = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                    Simple TODO App with MyQuyen
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}

                    />

                    <div className="list-todo-content">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyobj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}

                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button
                                            onClick={() => this.handleDeleteTodo(item)}

                                        >Delete</button>

                                        <button
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyobj === false && editTodo.id === item.id ?
                                                "Save"
                                                :
                                                "Edit"
                                            }

                                        </button>

                                    </div>
                                )
                            })
                        }



                    </div>

                </div>
            </>
        )
    }

}

export default Color(ListTodo);