import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";
import Button from '@mui/material/Button';

const SummarySection = () => {
    return (
        <section className="studio-section">
            <div className="section-wrapper">
                <div className="parallax-wrapper">
                    <Parallax section="summary">
                        <div className="parallax-content">
                            <div className="heading">
                                Radiosummary
                            </div>
                            <div className="description">
                                Jest rok 1991 kilkanaście miesięcy po upadku komunizmu, Gdańsk. Reemigrant Jacek Waldemar wraca do Polski z chęcią działania. Ujrzawszy ojczysty bałagan, biedę i bezrobocie, uruchamia pierwsze na wybrzeżu prywatne radio. To wstrząs dla Słomińskiego, dyrektora lokalnej rozgłośni państwowego nadawcy. Do tej pory to, czy jego audycji ktokolwiek słucha, nie miało dla niego znaczenia. Waldemar walczy zacięcie, bo wygrana słuchalności to konkretne wpływy z reklam, ale pewnego dnia mieszkańcy Gdańska maja jeszcze większy wybór.
                            </div>
                            <div className="button-wrapper">
                                <div className="link">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                    >
                                        Zobacz zwiastun
                                    </Button>
                                </div>
                                <div className="link2">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        component={Link}
                                        to={`/photo`}
                                    >
                                        Zobacz zdjęcia
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </section>
    );
}

export default SummarySection;
