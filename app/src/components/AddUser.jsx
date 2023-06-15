import { FormGroup, FormControl, Button, InputLabel, Input, styled } from "@mui/material";

const Container = styled(FormGroup)`
    width : 50%;
    margin : auto;
    margin-top : 20px;
`;

const Text = styled(FormControl)`
    margin-top : 20px;
`;

const AddUser = () =>{
    return (
        <Container>
            <Text>
                <InputLabel>Name</InputLabel>
                <Input />
            </Text>
            <Text>
                <InputLabel>email</InputLabel>
                <Input />
            </Text>
            <Text>
                <InputLabel>username</InputLabel>
                <Input />
            </Text>
            <Text>
                <InputLabel>Phone</InputLabel>
                <Input />
            </Text>
        </Container>
    )
}

export default AddUser;