import { useEffect } from "react";
import { cast } from "../data/cast";
import HeaderPage from "../components/HeaderPage";
import CardCast from "../components/CardCast";

const CastView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="cast-view">
            <div className="view-wrapper">
                <div className="view-header">
                    <HeaderPage header="Obsada" />
                </div>
                <div className="view-body container">
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
                </div>
            </div>
        </div>
    );
}

export default CastView;
