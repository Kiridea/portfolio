import './Stats.css'

function Stats() {
    return (
        <div className="stat-box">
            <h2>Kiridea</h2>
            <small>Kim Delgado</small>
            <div className="level">
                <h4>Lvl 22</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <hr />
            <p>Title - Web Developer | Digital Artist</p>
            <p className="description">Description <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis unde itaque distinctio consequatur ipsum quidem doloribus minima voluptate ad accusamus culpa est voluptatum qui, impedit cumque dolorum magni nisi?
            </p>
            <div className="style-buttons">
            <button>🕶️</button>
            <button>🕶️</button>
            <button>🕶️</button>
            </div>
        </div>
    )
}

export default Stats;