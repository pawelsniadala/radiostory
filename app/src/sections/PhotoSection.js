import HeaderSection from "../components/HeaderSection";
import ReactImageAppear from "react-image-appear";
import LinkMore from "../components/LinkMore";
import { photo } from "../data/photo";

const PhotoSection = () => {
    return (
        <section className="cast-section">
            <div className="container">
                <div className="section-wrapper">
                    <HeaderSection
                        header="Zdjęcia"
                    />
                    <div className="grid-wrapper">
                        {photo.film.length ? photo.film.slice(0,6).map((item, index) => (
                            <div key={item.id} className={`a${index + 1}`}>
                                <ReactImageAppear
                                    // className="card-img-top"
                                    src={item.original.src}
                                    alt="..."
                                    placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                    showLoader={true}
                                />
                            </div>
                        )) : (
                            <div />
                        )}
                    </div>
                    <LinkMore
                        linkTo="/photo"
                        linkText="Zobacz wszystkkie zdjęcia"
                    />
                </div>
            </div>
        </section>
    );
}

export default PhotoSection;
