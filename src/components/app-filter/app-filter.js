import './app-filter.css'

const AppFilter = () => {

    return (
        <div className="btn-group">
            <buttton
                className="btn btn-light"
                type="button">
                    Всі працівники
            </buttton>
            <buttton
                className="btn btn-outline-light"
                type="button">
                    На підвищення
            </buttton>
            <buttton
                className="btn btn-outline-light"
                type="button">
                    ЗП більше 1000$
            </buttton>
        </div>
    )

}

export default AppFilter;