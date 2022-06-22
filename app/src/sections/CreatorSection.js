import HeaderSection from "../components/HeaderSection";
import CardPerson from "../components/CardPerson";
import LinkMore from "../components/LinkMore";
import { creator } from "../data/creator";

const CreatorSection = () => {
    const all = [
        ...creator.direction,
        ...creator.photo,
        ...creator.montage,
        ...creator.makeup,
        ...creator.management,
        ...creator.camera
    ];

    return (
        <section className="cast-section">
            <div className="container">
                <div className="section-wrapper">
                    <HeaderSection
                        header="Twórcy"
                    />
                    <div className="card-wrapper person">
                        {all.length ? all.slice(0,5).map(item => (
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
                        linkTo="/creator"
                        linkText="Zobacz wszystkich twórców"
                    />
                </div>
            </div>
        </section>
    );
}

export default CreatorSection;
