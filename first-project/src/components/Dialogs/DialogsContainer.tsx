import {addMessage, AddMessageType, InitialStateType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    messagesPage: InitialStateType
}

type MapDispatchPropsType = {
    addMessage: (newMessageBody: string) => AddMessageType
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs);