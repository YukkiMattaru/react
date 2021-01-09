import { follow, requestUsers, unfollow } from "../../redux/usersReducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import { getCurrentPage, getIsFetching, getIsFollowingInProgress,
    getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFollowingInProgress: Array<number>
    isFetching: boolean
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => any
    follow: (userID: number) => any
    unfollow: (userID: number) => any
}

type PropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
    follow = (userID: number) => {
        this.props.follow(userID)
    }
    unfollow = (userID: number) => {
        this.props.unfollow(userID)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
        mapStateToProps,
        {
            follow, unfollow, getUsers: requestUsers
        })
)(UsersContainer)