import React, { useState } from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './AdminElements';

const Admin = () => {
    const [fileInput, setFileInput] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const fileSelectedHandler = (event) => {
        previewFile(event.target.files[0]);
        setFileInput(event.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedFile(reader.result);
        };
    };

    const fileUploadHandler = (event) => {
        event.preventDefault();
        if (!selectedFile) return;
        uploadImage(selectedFile);
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInput('');
            setSelectedFile('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">admin</Icon>
                    <FormContent>
                        <Form onSubmit={fileUploadHandler}>
                            <FormH1>Upload media</FormH1>
                            <FormInput type="file" name="image" value={fileInput} onChange={fileSelectedHandler} />
                            {/* <FormLabel htmlFor="for">Text</FormLabel>
                            <FormInput type="text" required /> */}
                            {selectedFile && (
                                <img
                                    src={selectedFile}
                                    alt="chosen"
                                    style={{ width: '200px' }}
                                />
                            )}
                            <FormButton type="submit">Upload</FormButton>
                            <Text></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Admin;
