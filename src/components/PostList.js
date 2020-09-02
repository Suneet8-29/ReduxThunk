import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../action'
import UserHeader from './UserHeader'
 
class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId = {post.userId} ></UserHeader>
                        </div>
                    </div>
                </div>
            )
        })
       
    }

    render() {
        
        return (
            <div className='ui relaxed divided list'>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {posts : posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);