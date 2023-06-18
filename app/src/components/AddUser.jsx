import { FormGroup, FormControl, Button, InputLabel, Input, styled } from "@mui/material";
import { useState } from "react";

import { addUser } from "../service/api.js";

const Container = styled(FormGroup)`
    width : 50%;
    margin : auto;
    margin-top : 20px;
`;

const Text = styled(FormControl)`
    margin-top : 20px;
`;

const defaultValue = {
    name: '',
    email: '',
    username: '',
    phone: ''
}

const AddUser = () =>{

    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
    }

    return (
        <Container>
            <Text>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "name" />
            </Text>
            <Text>
                <InputLabel>email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email" />
            </Text>
            <Text>
                <InputLabel>username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "username" />
            </Text>
            <Text>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "phone" />
            </Text>
            <Text>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </Text>
        </Container>
    )
}

export default AddUser;