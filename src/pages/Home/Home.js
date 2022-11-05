import Hero from "../../components/Hero";
import NewItems from "../../components/NewItems";
import FeaturesSecond from "../../components/FeaturesSecond";

import Testimonial from "../../components/Testimonial";
import Newsletter from "../../components/Newsletter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Home = () => {
    return (
        <div>
      <Header />
            <Hero />
            <NewItems />
            <FeaturesSecond />
            <Testimonial />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Home;