import React, { Component } from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'NodeJS',
            'ReactJS',
            'ReactNative'
        ]
    }

    handleChangeInput = e => {
        this.setState({ newTech: e.target.value });
    };

    handleSubmitForm = e => {
        e.preventDefault();
        this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input onChange={this.handleChangeInput} value={this.state.newTech} />
                <button type="submit">Adicionar</button>
            </form>
        );
    }
}

export default TechList;