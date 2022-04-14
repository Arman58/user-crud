import {Form} from "./Form";
import {Email} from "./Fields/Email";
import {Phone} from "./Fields/Phone";
import {Name} from "./Fields/Name";
import {Username} from "./Fields/Username";
import {Address} from "./Fields/Address";


export const EditModalForm = (props) => (
    <Form id="edit-form" {...props}>
            <Name />
            <Username />
        <Email />
        <Address />
        <Phone />
    </Form>
);
