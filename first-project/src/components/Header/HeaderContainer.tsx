import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/store";

type MapDispatchPropsType = {
    logout: () => void
}

type MapStateToProps = {
    isAuth: boolean
    login: string | null
    userId: number | null
}

type HeaderContainerPropsType = MapStateToProps & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
})

export default connect<MapStateToProps, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);