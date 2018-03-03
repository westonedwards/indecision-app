class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false
        };
    }
    handleToggle() {
        this.setState((previousState) => {
            return {
                visible: !previousState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/* let buttonText = 'Show Details';
let details = '';
const toggleDetails = () => {
    if(details) {
        details = '';
        buttonText = 'Show Details'
    }
    else {
        details = 'Hey. These are some details you can now see!';
        buttonText = 'Hide Details';
    }
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{buttonText}</button>
            {details && <p>{details}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
render();
 */