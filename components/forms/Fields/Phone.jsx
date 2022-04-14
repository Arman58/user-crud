import {InputField} from "./InputField";

export const Phone = () => {

    return (
        <InputField
            name="phone"
            label={"Phone number"}
            type="text"
            options={{
                pattern: {
                    value: /^\d+$/,
                    message: "Please type phone number",
                },
                required: {
                    value: true,
                    message: "Please type correct phone number",
                },
            }}
        />
    );
};
