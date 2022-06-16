import HeaderSection from "../components/HeaderSection";
import CardPerson from "../components/CardPerson";
import LinkMore from "../components/LinkMore";
import { cast } from "../data/cast";

const CastSection = () => {
    return (
        <section className="cast-section">
            <div className="container">
                <div className="section-wrapper">
                    <HeaderSection
                        header="Obsada"
                    />
                    <div className="card-wrapper person">
                        {cast.main.length ? cast.main.slice(0,4).map(item => (
                            <CardPerson
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
