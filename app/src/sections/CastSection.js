import HeaderSection from "../components/HeaderSection";
import CardCast from "../components/CardCast";
import LinkMore from "../components/LinkMore";
// import Alert from "../components/Alert";
import { cast } from "../data/cast";

const CastSection = () => {
    // const cardRealizations = (title) => {
    //     switch(title) {
    //         case "Wizerunkowe":
    //             return (
    //                 photo.realization.branding.length
    //             );
    //         case "Studyjne":
    //             return (
    //                 photo.realization.studio.length
    //             );
    //         case "Plenerowe":
    //             return (
    //                 photo.realization.outdoor.length
    //             );
    //         case "Produktowe":
    //             return (
    //                 photo.realization.product.length
    //             );
    //         default:
    //     }
    // }

    return (
        <section className="cast-section">
            <div className="container">
                <div className="section-wrapper">
                    <HeaderSection
                        header="Obsada"
                    />
                    <div className="card-wrapper cast">
                        {cast.length ? cast.map(item => (
                            <CardCast
                                key={item.id}
                                cardTitle={item.name}
                                cardDescription={item.role}
                                cardImg={item.img}
                            />
                        )) : (
                            <div />
                        )}
                    </div>
                    <LinkMore
                        linkTo="/cast"
                        linkText="Zobacz pełną obsadę"
                    />
                </div>
            </div>
        </section>
    );
}

export default CastSection;
