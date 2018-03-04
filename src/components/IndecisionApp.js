import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((previousState) => ({
            options: previousState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((previousState) => ({
                options: previousState.options.concat([option])
            })
        );
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options}));
            }
        }
        catch(error) {

        }
    }
    componentDidUpdate(previousProps, previousState) {
        if(previousState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}