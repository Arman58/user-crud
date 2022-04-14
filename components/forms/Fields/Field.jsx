import {useFormContext, get} from 'react-hook-form';


export const Field = ({children, name, label, extra, options}) => {
    const {
        register,
        formState: {errors},
    } = useFormContext();
    const error = get(errors, name);
    const hasError = !!error;
    return (
        <div className="form-control">
            <label>
                <div className="px-1 pb-2 pt-1">
          <span
              className={`label-text ${
                  options?.required &&
                  "after:content-['*'] after:pl-1 after:-mt-2 after:font-serif after:text-red-500 after:text-xl"
              }`}
          >
            {label}
          </span>
                </div>
                {children({...register(name, options), placeholder: label, id: name, hasError})}
            </label>
            <div className="label pb-0 pt-1">
          <span className={`label-text-alt ${hasError ? 'text-error' : ''}`}>
            {hasError ? error.message : extra || <>&nbsp;</>}
          </span>
            </div>
        </div>
    );
};
