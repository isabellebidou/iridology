import React from 'react';

class EyePic extends React.Component {

    render() {
        return (
            <div className='page'>
                <p className="itemp">
                    {this.props.location.state.side} eye pic sent on: {new Date(this.props.location.state.dateSent).toLocaleDateString()}
                </p>

                <img className="item"
                    id={this.props.location.state.id}
                    src={this.props.location.state.src}
                    alt={this.props.location.state.alt}
                    eyepic={this.props.location.state.eyePic}
                />
                <a className='closeEyeWindow' href='/readings'>x</a>
            </div>
        );
    }
}

export default EyePic;
