import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import {Preloader} from "./../common/Preloader.jsx";

let mapStateToProps = (state) => ({
    profile:state.profile
});

const withAuthRedirect = (Component) => {
    class RedirectComponent extends PureComponent {
        render() {

            // NOT LOGGED TO LOGIN ELSE TO COMPONENT
            if (!this.props.profile) return <Preloader />
            return <Component {...this.props}/>
        }
    }


    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectRedirectComponent;
};

export default withAuthRedirect;