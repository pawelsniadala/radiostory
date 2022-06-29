import * as bootstrap from "bootstrap";
import { useEffect, useRef  } from "react";
import emailjs from "@emailjs/browser";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PhotoFilmPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hgver59", "template_kidfc2k", form.current, "_o3zGPDB_96l97OYE") // pawel
            .then((result) => {
                console.log(result.text);
                showToast();
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const showToast = () => {
        new bootstrap.Toast(document.getElementById("successToast")).show();
    }

    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper contact">
                        <div className="card contact form">
                            <div className="card-body">
                                <form ref={form} onSubmit={sendEmail}>
                                    <TextField
                                        helperText=" "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Imię i nazwisko"
                                        fullWidth
                                        size="small"
                                        name="name"
                                        required
                                    />
                                    <TextField
                                        helperText=" "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Adres e-mail"
                                        fullWidth
                                        size="small"
                                        name="email"
                                        required
                                    />
                                    <TextField
                                        helperText=" "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Numer telefonu"
                                        fullWidth
                                        size="small"
                                        name="phone"
                                        required
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Wiadomość"
                                        className="mb-4"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        name="message"
                                        required
                                    />
                                    <div className="send">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            type="submit"
                                        >
                                            Wyślij wiadomość
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PhotoFilmPartial;
