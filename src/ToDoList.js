import { Component } from 'react';
import checkedSign from './checkedSign.png'


export class ToDoList extends Component{
    constructor() {
        super();

        this.state = {
            userInput: '',
            todoList: []
        }
    }
    onChangeEvent(e) {
        this.setState({ userInput: e })
    }

    addTask(input) {
        if (input === '') {
            alert("Please add your task.Don't leave the gap empty!")
        }
        else {
            let listArray = this.state.todoList;
            listArray.push(input);
            this.setState({ todoList: listArray, userInput: '' })
    }
    }

    deleteTask() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault(e);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className='header'>
                <input type='text'
                placeholder='What should I do?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className='header'>
                    <button onClick={() =>this.addTask(this.state.userInput)} className='btn add'>Add</button>
                </div>

                <ul>
                    {this.state.todoList.map((item,index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img className='imageIcon' src={checkedSign} width="20px" alt="Icon"/>
                            {item}</li>
                    ))}
                </ul>
                <div className='header'>
                <button onClick={() => this.deleteTask()} className='btn delete'>Delete</button>
                    </div>
                    </form>
                </div>
    )
    }
}