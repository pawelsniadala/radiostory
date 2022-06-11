import { Gallery, Item } from "react-photoswipe-gallery";
import { photo } from "../../../data/photo";
import Card from "../../../components/Card";

const PhotoPlanPartial = () => {
    const plan = photo.plan;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(plan);

    return (
        <div className="video-wedding-partial">
            <section className="realization-section">
                <div className="section-wrapper">
                    <div className="card-wrapper realization photo">
                        <Gallery>
                            {plan.length ? plan.map((item) => (
                                <Item
                                    key={item.id}
                                    original={item.original.src}
                                    thumbnail={item.thumbnail.src}
                                    width={item.original.width}
                                    height={item.original.height}
                                    title={item.title}
                                >
                                    {({ ref, open }) => (
                                        <Card
                                            cardTitle={item.title}
                                            cardPhotoSrc={item.thumbnail.src}
                                            layoutRef={ref}
                                            onClick={open}
                                        />
                                    )}
                                </Item>
                            )) : (
                                <div />
                            )}
                        </Gallery>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PhotoPlanPartial;
