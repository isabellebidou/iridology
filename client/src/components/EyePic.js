import React from 'react';
class EyePic extends React.Component {
    componentDidMount() {

        if (this.props.location.state) {
            const id = this.props.location.state.id;
            const src = this.props.location.state.src;
        }
    }

    render() {
        return (
            <div>
                <p className="item">
                    {this.props.location.state.side} eye pic sent on: {new Date(this.props.location.state.dateSent).toLocaleDateString()}
                </p>
                <img className="item"
                    id={this.props.location.state.id}
                    src={this.props.location.state.src}
                    alt={this.props.location.state.alt}
                    eyePic={this.props.location.state.eyePic}
                />
            </div>
        );
    }
}
export default EyePic;
