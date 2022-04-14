import {forwardRef, useCallback, useImperativeHandle, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Modal} from "../index";
import {EditModalForm} from "../../forms/EditModalForm";


export const EditModal = forwardRef(({editMyUser,userId}, ref) => {
    const form = useForm();
    const [submitting, setSubmitting] = useState(false);
    const editModalRef = useRef(null);

    const closeModal = useCallback(() => {
        editModalRef.current?.close();
    }, [editModalRef]);

    useImperativeHandle(ref, () => ({
        open: (id) => {
            editModalRef.current?.open(id);
        },
        close: () => {
            editModalRef.current?.close();
        },
    }));


    const handleSubmit = useCallback(
        (values) => {
            setSubmitting(true);
            if (values) {
                editMyUser(userId,values)
                setSubmitting(false)
                closeModal()
            }
            return(()=>setSubmitting(false)) ;
        },
        [userId],
    );

    return (
        <Modal ref={editModalRef}>
            <EditModalForm form={form} onSubmit={handleSubmit}/>
            <div className="modal-action">
                <button className={`btn btn-primary ` + `${submitting ? 'loading' : ''}`} type="submit"
                        form="edit-form">
                    ok
                </button>
                <button className="btn uppercase" onClick={closeModal}>
                    cancel
                </button>
            </div>
        </Modal>
    );
});
