import {InputField} from "./InputField";

export const Address = () => {

  return (
    <InputField
      name="website"
      label="Address"
      type="text"
      options={{
        required: {
          value: true,
          message: "Please type Address",
        },
      }}
    />
  );
};
