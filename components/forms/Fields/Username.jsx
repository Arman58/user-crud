import {InputField} from "./InputField";

export const Username = () => {

  return (
    <InputField
      name="username"
      label="username"
      options={{
        required: {
          value: true,
          message: "Please type Username",
        },
      }}
    />
  );
};
