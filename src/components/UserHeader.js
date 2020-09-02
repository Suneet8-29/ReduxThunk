import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../action'

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.user;
         if (!user) {
            return <div>Loading...</div>
        }
        return <h4>{user.name}</h4>
    }
}

const mapStateToProps = ({user}, ownProps) => {
    return {user : user.find(user=>user.id === ownProps.userId)}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);