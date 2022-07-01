import { useState, useEffect } from "react";
import { creator } from "../data/creator";
import HeaderSection from "../components/HeaderSection";
import CardPerson from "../components/CardPerson";
import LinkMore from "../components/LinkMore";

const CreatorSection = () => {
    const all = [
        ...creator.direction,
        ...creator.photo,
        ...creator.montage,
        ...creator.makeup,
        ...creator.management,
        ...creator.camera
    ];

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        return { width };
    }

    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    const amountOfElements = () => {
        if (width <= 991.98) {
            return 4
        } else if (width >= 991.98 && width <= 1199.98) {
            return 6
        } else {
            return 5
        }
    };

    return (
        <section className="cast-section">
            <div className="container">
                <div className="section-wrapper">
                    <HeaderSection
                        header="Twórcy"
                    />
                    <div className="card-wrapper person">
                        {all.length ? all.slice(0, amountOfElements()).map(item => (
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
