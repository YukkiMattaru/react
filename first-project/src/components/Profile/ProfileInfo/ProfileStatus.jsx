import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    inEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    outEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                { !this.props.status &&
                <div onDoubleClick={ this.inEditMode }>
                    <span>Введите статус</span>
                </div>}

                {!this.state.editMode &&
                <div onDoubleClick={ this.inEditMode }>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus='true' onBlur={ this.outEditMode } value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus