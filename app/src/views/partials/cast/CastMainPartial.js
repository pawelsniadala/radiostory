import { cast } from "../../../data/cast";
import CardPerson from "../../../components/CardPerson";

const CastMainPartial = () => {
    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper person">
                        {cast.main.length ? cast.main.map(item => (
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

export default CastMainPartial;
