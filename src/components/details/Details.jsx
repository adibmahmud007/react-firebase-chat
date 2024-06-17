import "./Details.css"
const Details = () => {
    return (
        <div className="details">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Adib Mahmud</h2>
                <p>hello i am adb mahmud</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="arrowDown.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="arrowUp.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./avatar.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>

                            <img className="icon" src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./avatar.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>

                            <img className="icon" src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./avatar.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>

                            <img className="icon" src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./avatar.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>

                            <img className="icon" src="./download.png" alt="" />
                        </div>
                       

                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div >
    );
};

export default Details;