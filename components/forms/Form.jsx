import {  FormProvider } from 'react-hook-form';



export const Form = ({ children, id, form, onSubmit, onFailed }) => (
    <FormProvider {...form}>
        <form id={id} onSubmit={form.handleSubmit(onSubmit, onFailed)}>
            {children}
        </form>
    </FormProvider>
);
