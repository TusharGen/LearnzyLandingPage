// Images
import Illustration1 from "./assets/Illustration_1.png";
import Illustration2 from "./assets/Illustration_2.png";

// Icons
import IconLaslesVpn from "./assets/Logo.png";
import User from "./assets/User.png";
import Server from "./assets/Server.png";
import Checklist from "./assets/icon-checklist.png";
import CheckSuccess from "./assets/Check_Success.png";

function App() {
  // Isi Card Info
  const cardInfo = [
    {
      icons: User,
      label: "Students",
      total: "1000+",
    },
    {
      icons: Server,
      label: "Subjects",
      total: "20+",
    },
    {
      icons: User,
      label: "Teachers",
      total: "100+",
    },

  ];

  // Isi Features
  const features = [
    "One-to-one live classes",
    "Progress report",
    "Recorded Lectures",
    "Personalized attention.",
  ];

  return (
    <>
      {/* Navbar Start */}
      <header className="container max-w-5xl mx-auto pt-12 flex flex-row items-center space-x-36">
        {/* Logo */}
        <img src={IconLaslesVpn} alt="icon-laslesVpn" className="w-36" />

        {/* Menu */}
        <div className="flex-1">

        </div>

        {/* Button */}
        <div className="flex flex-row items-center space-x-6">
          <button className="font-bold" id="login-btn">Log In</button>
          {/* document.getElementById(login-btn).onclick = 
          function () {
            window.location.replace(www.google.com);
          } */}
          <button className="rounded-full border border-red-500 py-3 px-6"> Sign Up</button>
        </div>
      </header>
      {/* Navbar End */}

      {/* Jumbotron Start */}
      <main className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
        {/* Description */}
        <div>
          <h1 className="font-bold text-4xl mb-5">
          Your path to academic success starts here.
          </h1>
          <p className="font-normal text-xs mb-12">
            We provide tuition classes that make a difference.
            Unlock your full potential with our expert tutors to ace your exams and elevate your confidence.
          </p>
          <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
            Get Started
          </button>
        </div>

        {/* Image */}
        <img src={Illustration1} alt="illustration-laslesvpn" />
      </main>
      {/* Jumbotron End */}

      {/* Card Info Start */}
      <section className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-3 shadow-2xl rounded-xl py-7">
          {cardInfo.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row justify-center py-7 space-x-6 ${index + 1 !== cardInfo.length && "border-r border-slate-200"
                  }`}
              >
                <div className="flex flex-row">
                  <div className="rounded-full mr-5">
                    <img
                      src={val.icons}
                      alt={val.label}
                      className="w-14 h-14"
                    />
                  </div>
                  <div>
                    <div>{val.total}</div>
                    <div>{val.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Card Info Start */}

      {/* Features Start */}
      {/* <section className="container max-w-5xl mx-auto py-24"> */}
      <div className="grid grid-cols-2 items-center">
        <img src={Illustration2} alt="features-laslesvpn" />
        <div className="px-16 space-y-4">
          <h2 className="font-medium text-3xl">
            We Provide Many Features You Can Use
          </h2>
          <p className="font-normal text-sm">
            You can explore the features that we provide with fun and have
            their own functions each feature.
          </p>
          {features.map((val, index) => {
            return (
              <div className="flex items-center space-x-3" key={index}>
                <img src={Checklist} alt="icon-check" className="w-6 h-6" />
                <div className="text-xs">{val}</div>
              </div>
            );
          })}
        </div>
      </div>
      

      {/* {<!-- ====== Footer Section Start -->} */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Learnzy Pvt. Ltd.</p>
          <p>Made with ❤️ by Piyush Kumar</p>
        </div>
      </footer>
    </>
  );
}

// Card Plan
function CardPlan({ title, price, features }) {
  return (
    <div className="bg-white border border-slate rounded-lg flex flex-col items-center justify-between hover:border-red-500 transition duration-300 pt-16 pb-8">
      <div className="space-y-5 flex flex-col items-center justify-center">
        {/* <img src={Plan} alt="icon-plan" className="w-24" /> */}
        <h3>{title}</h3>
        <div className="space-y-2">
          {features.map((val, index) => {
            return (
              <div key={index} className="flex mr-2 items-center space-x-2">
                <img
                  src={CheckSuccess}
                  alt="check-success"
                  className="w-3 h-2"
                />
                <div>{val}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center font-medium mb-3">{price}</div>
        <button className="border rounded-full py-2 px-10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-medium">
          Select
        </button>
      </div>
    </div>
  );
}

export default App;
