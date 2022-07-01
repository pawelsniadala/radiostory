import { Gallery, Item } from "react-photoswipe-gallery";
import { photo } from "../../../data/photo";
import CardPhoto from "../../../components/CardPhoto";

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
                        <Gallery withCaption>
                            {plan.length ? plan.map((item) => (
                                <Item
                                    key={item.id}
                                    original={item.original.src}
                                    thumbnail={item.thumbnail.src}
                                    width={item.original.width}
                                    height={item.original.height}
                                    title={item.title}
                                    alt={item.title}
                                    caption={item.title}
                                    cropped
                                >
                                    {({ ref, open }) => (
                                        <CardPhoto
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
