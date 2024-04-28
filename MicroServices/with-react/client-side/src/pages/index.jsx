// import Head from 'next/head';
// import Header from '../components/Header';
// import { useEffect } from "react";
// import Carousel from 'react-bootstrap/Carousel';

// export default function Home() {
//   useEffect(() => {
//     let header = document.querySelector("#__next .global-header"),
//       introduction = document.querySelector(".home .introduction");
//     introduction.style.minHeight = `calc(100vh - ${header.clientHeight}px)`;
//   }, []);

//   return (
//     <div className="home">
//       <Head>
//         <title>Image Creator By AI - Home</title>
//       </Head>
//       <Header />
//       {/* Start Introduction Section */}
//       <section className="introduction">
//         {/* Start Carousel Component From Bootstrap */}
//         <Carousel indicators={true}>
//           {/* Start Carousel Item */}
//           <Carousel.Item>
//             <div className="overlay d-flex align-items-center justify-content-center">
//               <Carousel.Caption>
//                 <h2>Welcome to the Image Creator By AI1</h2>
//               </Carousel.Caption>
//             </div>
//           </Carousel.Item>
//           {/* End Carousel Item */}
//           {/* Start Carousel Item */}
//           <Carousel.Item>
//             <div className="overlay d-flex align-items-center justify-content-center">
//               <Carousel.Caption>
//                 <h2>Welcome to the Image Creator By AI2</h2>
//               </Carousel.Caption>
//             </div>
//           </Carousel.Item>
//           {/* End Carousel Item */}
//           {/* Start Carousel Item */}
//           <Carousel.Item>
//             <div className="overlay d-flex align-items-center justify-content-center">
//               <Carousel.Caption>
//                 <h2>Welcome to the Image Creator By AI3</h2>
//               </Carousel.Caption>
//             </div>
//           </Carousel.Item>
//           {/* End Carousel Item */}
//         </Carousel>
//         {/* End Carousel Component From Bootstrap */}
//       </section>
//       {/* End Introduction Section */}
//     </div>
//   );
// }

import React from "react";
import Link from "next/link";
export default function Home() {
  const styles = {
    width: "40%",
    justifyContent: "center",
    margin: "100px auto",
    padding: "40px",
    backgroundColor: "",
    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.02)"
  };
  return (
    <div className="card" style={styles}>
      <div className="card-body">
        <h5 className="card-title">Welcome Text To Image!</h5>
        <p className="card-text">
          If you've already registered then please log in, else please register.
        </p>
        <Link href="auth/login">
          <h1 className="btn btn-primary" style={{ marginRight: "30px" }}>Login</h1>
        </Link>
        <Link href="auth/register">
          <h1 className="btn btn-primary">Register</h1>
        </Link>
      </div>
    </div>
  );
};
