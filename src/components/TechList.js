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

    handleDestroy = tech => {
        this.setState({ techs: this.state.techs.filter(tc => tc !== tech)});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech}&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => this.handleDestroy(tech)} type="button">X</button>
                        </li>
                    ))}
                </ul>
                <input onChange={this.handleChangeInput} value={this.state.newTech} />
                <button type="submit">Adicionar</button>
            </form>
        );
    }
}

export default TechList;