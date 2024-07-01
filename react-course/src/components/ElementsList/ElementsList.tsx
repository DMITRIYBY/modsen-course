import './styles.css';
import {Fragment} from "react";

const photos= [
    {
        "albumId": 1,
        "id": 1,
        "title": "green",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "purple",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
]

export const ElementsList = () => {
    return(
        <Fragment>
            <h2>Задание 1: Таблица</h2>
            {
                photos.map((item,index) => (
                    <div className="element__container" key={item.id}>
                        <p>Album ID: {item.albumId}</p>
                        <p>Item ID: {item.id}</p>
                        <p>Title: {item.title}</p>
                        <img src={item.url}  alt={""}/>
                        <img src={item.thumbnailUrl} alt={""}/>
                    </div>
                ))
            }
        </Fragment>
    );
}