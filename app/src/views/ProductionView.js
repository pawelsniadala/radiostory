import { useEffect } from "react";
// import { photo } from "../data/photo";
import HeaderPage from "../components/HeaderPage";


const ProductionView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="production-view">
            <div className="view-wrapper">
                <div className="view-header">
                    <HeaderPage header="Produkcja" />
                </div>
                <div className="view-body container">
                    <p>In mauris tortor, feugiat nec ipsum at, dictum semper enim. Duis ut diam sed tortor scelerisque venenatis. Maecenas facilisis vestibulum purus, ut congue erat consequat vitae. Praesent sed elit non magna maximus suscipit. Suspendisse id lacus placerat metus consequat vestibulum nec sed mauris. Duis at urna vitae ex dictum molestie aliquam ac enim. Integer tincidunt arcu eu ante viverra tincidunt. Donec viverra ante sed aliquam tristique. Curabitur sollicitudin egestas risus ut venenatis. Nunc mollis, justo sed fermentum varius, justo turpis commodo magna, a facilisis odio ante ultricies nibh. Sed mollis ex vitae scelerisque ultrices. Integer cursus arcu nibh. Nunc nec risus purus.</p>
                </div>
            </div>
        </div>
    );
}

export default ProductionView;
