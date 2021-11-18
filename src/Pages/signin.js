import React from 'react';
import ScrollToTop from '../components/ScrollToTop'; // to fix if doest show page of top when jump to other page
import SignIn from '../components/Signin';

const SigninPage = () => {
    return (
        <>
            <ScrollToTop />
            <SignIn />
        </>
    )
}

export default SigninPage
