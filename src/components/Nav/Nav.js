import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

    function Nav(props){
        //console.log(props)
    return(
        <div>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/new"><button>New Post</button></Link>
            <Link to="/"><button>Logout</button></Link>
            <h1>{props.username}</h1>
        </div>
    )
}

function mapStateToProps(state){

    return {
        username: state.username,
        profilePicture: state.profilePicture
    }
}

export default connect(mapStateToProps)(Nav);