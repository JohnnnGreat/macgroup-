import gsap from "gsap";
import "./SalesPitch.scss";
const SalesPitch = () => {
  return (
    <section id="sales" className="sales-pitch">
      <section className="sales-pitch__grid">
        <img src="./assetsFolder/illustrations/grids.svg" alt="grid" />
      </section>
      <section className="sales-pitch__copy">
        <p>Are you looking to increase your online visibility and</p>
        <p>reach? Our team of digital experts can help. We offer a</p>
        <p>range of services designed to boost your digital</p>
        <p>presence and drive growth.</p>
      </section>
      <section className="sales-pitch__sub-copy">
        <p>TRANSFORM YOUR ONLINE</p>
        <p>PRESENCE WITH EXPERT</p>
        <p>SERVICES</p>
      </section>
      <section className="sales-pitch__arrow">
        <img
          src="./assetsFolder/illustrations/arrow.svg"
          alt="pointer arrow icon"
        />
      </section>
      <section className="sales-pitch__grid-dark">
        <img src="./assetsFolder/illustrations/grids-dark.svg" alt="grids" />
      </section>
      <section className="sales-pitch__quadrant">
        <img src="./assetsFolder/illustrations/quadrant.svg" alt="quadrant" />
      </section>
    </section>
  );
};

export default SalesPitch;
