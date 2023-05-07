/*import components*/
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";

import headerData from "../../Data/HomepageHeaderData";

import "./Homepage.css";

const Homepage = () => {
    const headerDataimage = headerData.map(headerData => {
        return <Header image={headerData.image} title={headerData.title} paragraph={headerData.paragraph}/>
    })
    return (
        <header className="homepage__headerWrapper">
            <nav className="homepage__headerWrapper__navigation">
                <Navigation />
            </nav>
            {headerDataimage}
        </header>
    )

}

export default Homepage;