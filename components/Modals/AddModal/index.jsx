import {forwardRef, useCallback, useImperativeHandle, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Modal} from "../index";
import {ModalForm} from "../../forms/AddModalForm";


export const AddModal = forwardRef(({createMyUser}, ref) => {
    const form = useForm();
    const [submitting,setSubmitting] = useState(false)
    const modalRef = useRef(null);

    const closeModal = useCallback(() => {
        modalRef.current?.close();
    }, [modalRef]);

    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current?.open();
        },
        close: () => {
            modalRef.current?.close();
        },
    }));


    const handleSubmit = useCallback(
        (values) => {
            setSubmitting(true);
            if (values) {
                createMyUser(values)
                  setSubmitting(false)
                closeModal()
            }
           return(()=>setSubmitting(false)) ;
        },
        [],
    );

    return (
        <Modal ref={modalRef}>
            <ModalForm form={form}  onSubmit={handleSubmit}/>
            <div className="modal-action">
                <button className={`btn btn-primary ` + `${submitting ? 'loading' : ''}`} type="submit"
                        form="add-form">
                    ok
                </button>
                <button className="btn uppercase" onClick={closeModal}>
                    cancel
                </button>
            </div>
        </Modal>
    );
});
