import {InputField} from "./InputField";

export const Email = () => {

    return (
        <InputField
            name="email"
            label="Email"
            type="email"
            options={{
                required: {
                    value: true,
                    message: "Please type email",
                },
                pattern: {
                    value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please type correct email",
                },
            }}
        />
    );
};
