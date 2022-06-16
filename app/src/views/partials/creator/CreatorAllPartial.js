import { creator } from "../../../data/creator";
import CardPerson from "../../../components/CardPerson";
import Skeleton from '@mui/material/Skeleton';
const CreatorAllPartial = () => {
    const all = [
        ...creator.direction,
        ...creator.photo,
        ...creator.montage,
        ...creator.makeup,
        ...creator.management,
        ...creator.camera,
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
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CreatorAllPartial;
