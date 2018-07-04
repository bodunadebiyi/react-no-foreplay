import React, { Component } from 'react';
import { connectToStore } from '../lib/helpers';

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange= this.onChange.bind(this);
        this.state = { header: '' }
    }

    onKeyUp(e) {
        if (e.key === 'Enter') {
            this.props.changePage2Header(e.target.value)
            this.setState({header: ''})
        }
    }

    onChange(e) {
        this.setState({header: e.target.value});
    }

    render() {
        return (
            <div>
                <h4>{this.props.page2.header}</h4>
                <div className="text-center">
                    <p>Change Page Header</p>
                    <input 
                        type="text" 
                        onKeyUp={this.onKeyUp}
                        onChange={this.onChange} 
                        value={this.state.header}
                    />
                </div>
            </div>
        )
    }
}

export default connectToStore(Page2);