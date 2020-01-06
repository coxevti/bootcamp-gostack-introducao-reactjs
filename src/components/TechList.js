import React, { Component } from 'react';

import TechItem from './TechItem';

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
        this.setState({ techs: this.state.techs.filter(tc => tc !== tech) });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <ul>
                    {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDestroy={() => this.handleDestroy(tech)} />)}
                </ul>
                <input onChange={this.handleChangeInput} value={this.state.newTech} />
                <button type="submit">Adicionar</button>
            </form>
        );
    }
}

export default TechList;