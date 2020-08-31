import {
    follow, requestUsers,
    setCurrentPage,
    toggleIsFollowingInProgress,
    unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    follow = (userID) => {
        this.props.follow(userID)
    }
    unfollow = (userID) => {
        this.props.unfollow(userID)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.follow}
                   unfollow={this.unfollow}
                   isFollowingInProgress={this.props.isFollowingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage,
        toggleIsFollowingInProgress, getUsers: requestUsers})
)(UsersContainer)