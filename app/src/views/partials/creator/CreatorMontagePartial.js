import { creator } from "../../../data/creator";
import CardPerson from "../../../components/CardPerson";

const CreatorMontagePartial = () => {
    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper person">
                        {creator.montage.length ? creator.montage.map(item => (
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
                </div>
            </section>
        </div>
    );
}

export default CreatorMontagePartial;
