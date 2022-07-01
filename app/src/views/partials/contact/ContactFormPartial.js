import * as bootstrap from "bootstrap";
import { useEffect, useRef  } from "react";
import emailjs from "@emailjs/browser";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const PhotoFilmPartial = (props) => {
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

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#991111',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#991111',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#991111',
                borderWidth: '1px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#991111',
                borderWidth: '1px',
            },
        },
    });

    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper contact">
                        <div className="card contact form">
                            <div className="card-body">
                                <form ref={form} onSubmit={sendEmail}>
                                    <CssTextField
                                        helperText=" "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Imię i nazwisko"
                                        fullWidth
                                        size="small"
                                        name="name"
                                        required
                                    />
                                    <CssTextField
                                        helperText=" "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Adres e-mail"
                                        fullWidth
                                        size="small"
                                        name="email"
                                        required
                                    />
                                    <CssTextField
                                        helperText=" "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Numer telefonu"
                                        fullWidth
                                        size="small"
                                        name="phone"
                                        required
                                    />
                                    <CssTextField
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
