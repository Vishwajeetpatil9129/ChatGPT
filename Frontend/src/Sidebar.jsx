import "./Sidebar.css";

function Sidebar() {
    return (
        <section className="sidebar">
            <button>
                <img src="src\assets\blacklogo.png" alt="gpt logo" className="logo"></img>
                <span><i class="fa-solid fa-pen-to-square"></i></span>
            </button>

            <ul className="history">
                <li>history</li>
                <li>history</li>
                <li>history</li>  
            </ul>

            <div className="sign">
                <p>By Vishwajeet Patil</p>
            </div>
        </section>
    )
}

export default Sidebar;