import React, { Component } from 'react'
import axios from 'axios';

class CreateBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boardName: '',
            teamMember: '',
            typeOfBoard: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleChange(event){
       
    }
saveFormData(){
    const formData={
        boardName:this.ref.boardName.value,
        teamMember:this.ref.teamMember.value,
        typeOfBoard:this.ref.typeOfBoard.value,
    }
    console.log(formData);
}

    render() {
        return (
            <div>
                <h1>Create Board</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter a name for your board<br />
                        <input
                            id="name"
                            type="text"
                            placeholder="eg.Agile Sprint Board"
                            ref="boardName"
                            onChange={this.handleChange}
                            required />
                    </label>
                    <br />
                    <label>
                        Add your team members<br />
                        <input
                            id="team"
                            type="text"
                            placeholder="Add your team (separated by commas)"
                            ref="teamMember"
                            required />
                    </label>
                    <br />
                    <label>
                        Enter the type of your board<br />
                        <input
                            id="type"
                            type="text"
                            ref="typeOfBoard"
                            placeholder="eg.Design UX" />
                    </label>
                    <br />
                    <button type="submit" id="CreateBoard">Create</button>
                </form>
            </div>
        )
    }
}

export default CreateBoard
