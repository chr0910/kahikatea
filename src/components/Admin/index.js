import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './AdminElements';

const Admin = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileSelectedHandler = (event) => {
        setSelectedFile(event.target.files[0])
    };
    const fileUploadHandler = () => {
        axios.post('')
        console.log(selectedFile)
    };
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">admin</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Upload media</FormH1>
                            <FormInput type="file" onChange={fileSelectedHandler} />
                            {/* <FormLabel htmlFor="for">Text</FormLabel>
                            <FormInput type="text" required /> */}
                            <FormButton onClick={fileUploadHandler}>Upload</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Admin;
