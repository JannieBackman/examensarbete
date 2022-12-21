import heroImage from "./assets/heroImage.png";
import boostLogo from "./assets/logo.png";
import Header from "./Header";

function Hero() {
  return (
    <div style={{ height: "100vh", width: "100%", position: " relative" }}>
      <Header />
      <img
        src={heroImage}
        alt=''
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={boostLogo} alt='' />
      </div>
    </div>
  );
}

export default Hero;
