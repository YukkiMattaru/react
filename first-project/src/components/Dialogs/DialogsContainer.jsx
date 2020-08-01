import {addMessage, changeMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const DialogsContainer = connect(mapStateToProps,
    {addMessage, changeMessageText}
    )(Dialogs);

export default DialogsContainer;