import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';



export const Modal = forwardRef(({ destroyOnClose = true, children }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => {
            setOpen(true);
        },
        close: () => {
            setOpen(false);
        },
    }));

    useEffect(() => {
        if (!open) return;

        const listener = (event) => {
            if (event.code === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keypress', listener);
        return () => {
            document.removeEventListener('keypress', listener);
        };
    }, [open]);

    const handleOverlayClick = useCallback((event) => {
        console.log(event.currentTarget, 'event.currentTarget');
    }, []);

    if (destroyOnClose && !open) {
        return null;
    }

    return (
        <div className={`modal ${open ? 'modal-open' : ''}`} onClick={handleOverlayClick}>
            <div className="modal-box">{children}</div>
        </div>
    );
});
