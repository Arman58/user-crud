import {Field} from './Field';


export const InputField = ({type, defaultValue, size, disabled, min, ...props}) => (
    <Field {...props}>
        {({hasError, ...options}) => (
            <input
                {...options}
                type={type}
                defaultValue={defaultValue}
                className={`input input-bordered w-full ${hasError ? 'input-error' : ''} ${size ? size : ''}`}
                disabled={disabled}
                min={min}
            />
        )}
    </Field>
);
