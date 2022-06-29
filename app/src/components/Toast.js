const Toast = () => (
    <div className="toast-container position-fixed top-0 end-0">
        <div className="toast align-items-center border-0"
            id="successToast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-bs-delay="5000"
        >
            <div className="d-flex">
                <div className="toast-body">
                    Twoja wiadomość została wysłana.
                </div>
                <button type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close">
                </button>
            </div>
        </div>
    </div>
);

export default Toast;
