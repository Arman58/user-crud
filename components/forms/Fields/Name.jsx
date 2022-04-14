import {InputField} from "./InputField";

export const Name = () => {

  return (
    <InputField
      name="name"
      label={"Name"}
      type="text"
      options={{
        required: {
          value: true,
          message: "Please type Name",
        },
      }}
    />
  );
};
