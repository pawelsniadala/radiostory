import { cast } from "../../../data/cast";
import CardPerson from "../../../components/CardPerson";

const CastAllPartial = () => {
    const all = [
        ...cast.main,
        ...cast.other
    ];

    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper person">
                        {all.length ? all.map(item => (
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

export default CastAllPartial;
