import React, { useEffect } from "react";
import hms1 from "./assets/hms-1.png";
import chat1 from "./assets/chat1.png";
import fs1 from "./assets/fs1.png";
import aiImg1 from "./assets/aiImg-1.png";
import Lenis from "@studio-freight/lenis";
import { CiLocationArrow1 } from "react-icons/ci";
import { BackgroundBeams } from "./components/ui/background-beams";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // Very smooth, slow deceleration
      easing: (t) => 1 - Math.pow(2, -20 * t), // Ultra-soft easing
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" bricolage-grotesque ">
      <BackgroundBeams />
      <div>
        <section className="min-h-screen px-6 py-5 sm:px-10 lg:px-20 bg-[#f5f5f5] ">
          <div className="flex justify-between text-lg sm:text-lg  tracking-tighter bg-cover z-10">
            <h1 className=" text-2xl">Mayyy.</h1>

            <div className="items-end md:flex  gap-4 w-fit ">
              {["Skill", "Work", "About", "Contact"].map((item, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer w-full"
                  onClick={() => handleScroll(item)}
                >
                  <div className="relative group cursor-pointer w-full">
                    <span className="block text-end group-hover:text-white transition-colors duration-300 ">
                      {item}
                    </span>
                    <span className="block absolute left-0 -bottom-1 h-[1px] bg-neutral-100 transition-all duration-300 group-hover:w-full w-0"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-20 md:mt-40 xl:mt-50">
            <div className="max-[500px]:block flex items-center gap-5 lg:gap-10">
              <div>
                <img
                  className="h-30  rounded-2xl rotate-354"
                  src="https://images.unsplash.com/photo-1618051236199-d9850be1dab1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>

              <div className=" text-3xl sm:text-4xl lg:text-5xl tracking-tighter">
                <p>hyy,</p>
                <p>I'm Mayank Panwar</p>
              </div>
            </div>

            <div className="mt-6 text-5xl sm:text-6xl lg:text-8xl xl:text-8xl md:w-[80%] xl:w-[74%]">
              <p>- Blending aesthetics & performance to create a better web.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="pt-20 md:mt-0 lg:pt-30 px-6 py-5 sm:px-10 lg:px-20 ">
        <div>
          <p className="text-5xl sm:text-6xl lg:text-8xl tracking-tighter">
            What i do
          </p>

          <p className="text-xl mt-5 md:mt-7 lg:mt-10 text-neutral-600 tracking-tight md:w-[70%] lg:w-[60%] md:text-2xl lg:text-3xl">
            I build fast, reliable, full-stack web apps. From slick frontends to
            robust backends, I deliver complete, scalable solutions for
            startups, teams, and businesses.
          </p>
        </div>

        <div id="skill" className="mt-25 text-end">
          <p className="text-5xl sm:text-6xl lg:text-8xl tracking-tighter">
            Skills
          </p>

          <p className="text-xl mt-5 md:mt-7 text-end lg:mt-10 text-neutral-600 tracking-tight  md:text-2xl lg:text-3xl sm:pl-[5%] md:pl-[15%] lg:pl-[25%] xl:pl-[35%] 2xl:pl-[60%]">
            The Powers I wield to craft exceptional digital experiences. From
            frontend finesse to backend brilliance .
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4 my-25 lg:mt-40">
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                alt="JavaScript"
                class="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className=" font-semibold">JavaScript</h1>
              <p className="text-sm opacity-60">Programming Language</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt="React"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text- font-semibold">React.js</h1>
              <p className="text-sm opacity-60">Frontend Library</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt="Node.js"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">Node.js</h1>
              <p class="text-sm opacity-60">Backend</p>
            </div>
          </div>

          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="Express.js"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text font-semibold">Express.js</h1>
              <p class="text-sm opacity-60">Web Framework</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                alt="MongoDB"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">MongoDB</h1>
              <p class="text-sm opacity-60">Database</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">Tailwind CSS</h1>
              <p class="text-sm opacity-60">CSS Framework</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png"
                alt="ShadCN"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">ShadCN</h1>
              <p class="text-sm opacity-60">Component Library</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
                alt="Redux"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text font-semibold">Redux Toolkit</h1>
              <p className="text-sm opacity-60">State Management</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
                alt="Zustand"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="te-sm font-semibold">Zustand</h1>
              <p class="text-sm opacity-60">State Management</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
                alt="C++"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text- font-semibold">C++</h1>
              <p className="text-sm opacity-60">Programming Language</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
                alt="JWT"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="tex font-semibold">JSON Web Token</h1>
              <p className="text-sm opacity-60">Authentication</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 lg:w-80 h-auto border  rounded-xl border-neutral-300">
            <div className="w-14 h-14 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.svgrepo.com/show/342225/socket-io.svg"
                alt="Socket.IO"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 class="text- font-semibold">Socket.IO</h1>
              <p class="text-sm opacity-60">Real-time Communication</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="md:pt-20 px-6 py-5 sm:px-10 lg:px-20 bg-[#f5f5f5]"
      >
        <div>
          <p className="text-5xl sm:text-6xl lg:text-8xl tracking-tighter">
            Projects
          </p>

          <p className="text-xl mt-5 md:mt-7 lg:mt-10 text-neutral-600 tracking-tight md:w-[70%] lg:w-[60%] md:text-2xl lg:text-3xl">
            Thoughtfully crafted digital experiences that blend utility and
            aesthetics into something functional, memorable, and refined.
          </p>
        </div>

        <div className="mt-15 lg:mt-30 flex flex-col gap-">
          <div className="">
            <div className="border-b pb-3 border-neutral-600 sticky top-0 pt-10 bg-[#f5f5f5] ">
              <p className="text-2xl bg-black text-white px-3  w-fit rounded-2xl">
                01
              </p>
            </div>

            <div className="mt-20  lg:mt-30 flex flex-col  max-lg:gap-10 gap-10 lg:flex-row pb-30">
              <div className=" w-[100%] lg:flex flex-col justify-evenly">
                <a
                  href="https://hotelmanagement-bxyq.onrender.com"
                  className="w-fit"
                >
                  <div className="flex ">
                    <p className="text-4xl sm:text-6xl">StaySphere</p>
                  </div>
                </a>

                <p className="text-lg mt-3 sm:text-xl text-neutral-700 tracking-tight md:w-[ md:text-xl lg:text-xl">
                  A full-stack MERN app for managing hotel bookings with admin
                  and user panels. Features include JWT auth, role-based access,
                  image uploads, email notifications, analytics dashboard, soft
                  delete, and a responsive dark/light mode UI.
                </p>

                <div className="mt-7 lg:mt-2  flex flex-wrap gap-2 max-sm:text-sm">
                  {[
                    "React",
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                    "TailwindCSS",
                    "ShadCN",
                  ].map((tech, index) => (
                    <p className=" border border-neutral-400  w-fit px-2 rounded-lg">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="lg:w-[90%] ">
                <a href="https://hotelmanagement-bxyq.onrender.com">
                  <img
                    className="rounded-3xl w-full h-60 lg:h-100 object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                    src={hms1}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="">
            <div className="border-b pb-3 border-neutral-600 sticky top-0 pt-10 bg-[#f5f5f5] ">
              <p className="text-2xl bg-black text-white px-3  w-fit rounded-2xl">
                02
              </p>
            </div>

            <div className="mt-20 lg:mt-30 flex flex-col  gap-10 lg:flex-row pb-30">
              <div className=" w-[100%] lg:flex flex-col justify-evenly">
                <a href="https://chatapp-d4yb.onrender.com" className="w-fit">
                  <div className="flex">
                    <p className="text-4xl sm:text-6xl">VibeRom</p>
                  </div>
                </a>
                <p className="text-lg mt-3 sm:text-xl text-neutral-600 tracking-tight md:w-[ md:text-xl lg:text-xl">
                  A MERN stack chat application with real-time messaging powered
                  by Socket.IO. Includes JWT authentication, user management,
                  responsive UI, and smooth user experience for private chats.
                </p>

                <div className="mt-7 lg:mt-5  flex flex-wrap gap-2 max-sm:text-sm">
                  {[
                    "React",
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                    "TailwindCSS",
                    "Socket.io",
                    "Zustand",
                  ].map((tech, index) => (
                    <p className=" border border-neutral-400  w-fit px-2 rounded-lg">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="lg:w-[90%]">
                <a href="https://chatapp-d4yb.onrender.com">
                  <img
                    className="rounded-3xl w-full h-60 lg:h-100 object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                    src={chat1}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="">
            <div className="border-b pb-3 border-neutral-600 sticky top-0 pt-10 bg-[#f5f5f5] ">
              <p className="text-2xl bg-black text-white px-3  w-fit rounded-2xl">
                03
              </p>
            </div>

            <div className="mt-20 lg:mt-30 flex flex-col  gap-10 lg:flex-row pb-30">
              <div className=" w-[100%] lg:flex flex-col justify-evenly">
                <a
                  href="https://bgremoval-frontend.onrender.com"
                  className="w-fit"
                >
                  <p className="text-4xl sm:text-6xl">AI Image Enhancer</p>
                </a>
                <p className="text-lg mt-3 sm:text-xl text-neutral-600 tracking-tight md:w-[ md:text-xl lg:text-xl">
                  The AI Image Enhancer is a SaaS web app built with the MERN
                  stack and ClipDrop AI. It lets users remove backgrounds and
                  enhance images instantly. With Razorpay integration for
                  payments and secure auth, it's perfect for creators needing
                  quick, high-quality image edits.
                </p>

                <div className="mt-7 lg:mt-5  flex flex-wrap gap-2 max-sm:text-sm">
                  {[
                    "React",
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                    "TailwindCSS",
                    "Material UI",
                  ].map((tech, index) => (
                    <p className="border border-neutral-400  w-fit px-2 rounded-lg">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="lg:w-[90%]">
                <a href="https://bgremoval-frontend.onrender.com">
                  <img
                    className="rounded-3xl w-full h-60 lg:h-100 object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                    src={aiImg1}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="">
            <div className="border-b pb-3 border-neutral-600 sticky top-0 pt-10 bg-[#f5f5f5] ">
              <p className="text-2xl bg-black text-white px-3  w-fit rounded-2xl">
                04
              </p>
            </div>

            <div className="mt-20 lg:mt-30 flex flex-col  gap-10 lg:flex-row pb-30">
              <div className=" w-[100%] lg:flex flex-col justify-evenly">
                <p className="text-4xl sm:text-6xl">StaySphere</p>
                <p className="text-lg mt-3 sm:text-xl text-neutral-600 tracking-tight md:w-[ md:text-xl lg:text-xl">
                  StaySphere is a modern hotel management system built with the
                  MERN stack. It streamlines hotel operations by offering
                  features like secure authentication, dynamic room listings,
                  real-time bookings, and a powerful admin dashboard with
                  revenue analytics. It also supports image uploads, email
                  notifications, and role-based access control for efficient
                  management.
                </p>

                <div className="mt-7 lg:mt-5  flex flex-wrap gap-2 max-sm:text-sm">
                  {["React", "TailwindCSS", "Context API", "ShadCN"].map(
                    (tech, index) => (
                      <p className=" border border-neutral-400  w-fit px-2 rounded-lg">
                        {tech}
                      </p>
                    )
                  )}
                </div>
              </div>

              <div className="lg:w-[90%]">
                <img
                  className="rounded-3xl w-full h-60 lg:h-100 object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                  src={fs1}
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section
        id="about"
        className="pt-30 pb-30 lg:pb-50 px-6 py-5 sm:px-10 lg:px-20 bg-[#f5f5f5]"
      >
        <div className="flex gap-2 sm:items-center ">
          <div>
            <img
              src="https://www.ngan-nguyen.com/images/Visual-DownArrow.svg"
              alt=""
            />
          </div>
          <p className="max-[500px]:text-3xl text-4xl sm:w-[80%]   sm:text-5xl md:w-[70%] lg:w-[40%]">
            If you’re still scrolling, here’s my background
          </p>
        </div>

        <div className="mt-20 text-xl md:text-2xl lg:flex ">
          <div className="w-[80%]"></div>
          <div className="w-[100%]">
            <p className=" text-neutral-600">
              <span className="bg-purple-800 text-white px-2 rounded-2xl">
                Hyy , I’m Mayank Panwar
              </span>{" "}
              — a curious and creative web developer, passionate about building
              user-friendly, real-world web applications.
            </p>

            <p className=" text-neutral-600 mt-10">
              I'm from{" "}
              <span className="text-black font-semibold">Ratlam , India</span> .
              I love turning ideas into real, working web apps. From crafting
              smooth UIs to wiring up powerful backends, I enjoy every part of
              the process. I work with modern tools to create fast, clean, and
              scalable products. Whether it's for a startup, a team, or just a
              passion project, I bring code to life with purpose and precision.
            </p>

            <p className=" text-neutral-950 mt-10">
              {" "}
              Currently open to new challenges and opportunities to create
              something meaningful.
            </p>
          </div>
        </div>
      </section>

      <div
        id="contact"
        className="relative h-screen"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0  w-full">
          <section className=" bg-[#141414] px-6 py-5 sm:px-10 lg:px-20 text-white">
            <div className="pt-30 text-7xl md:text-8xl lg:text-9xl">
              <p>Sooooo,</p>
              <p>what's next?</p>
            </div>

            <div className="mt-20 flex flex-col gap-5">
              <div className=" bg-[#8290f5] px-4 py-2 md:px-6 md:py-3 rounded-4xl w-fit text-black max-[400px]:text-xl text-3xl hover:bg-white hover:text-black cursor-pointer hover:-rotate-6 transition-all duration-300">
                <a href="mailto:mayankpanwar066@gmail.com">
                  You can email me ✉️
                </a>
              </div>

              <div className="bg-[#8290f5] px-4 py-2 md:px-6 md:py-3 rounded-4xl w-fit text-black max-[400px]:text-xl text-3xl hover:bg-white hover:text-black cursor-pointer hover:-rotate-6 transition-all duration-300">
                <a href="https://www.linkedin.com/in/mayankpanwar77">
                  Find me on LinkedIn 💬{" "}
                </a>
              </div>

              <div className="bg-[#8290f5] px-4 py-2 md:px-6 md:py-3 rounded-4xl w-fit text-black max-[400px]:text-xl text-3xl hover:bg-white hover:text-black cursor-pointer hover:-rotate-6 transition-all duration-300">
                <a href="https://github.com/Mayank7677">
                  Checkout my Github <span className="sm:ml-4">✉️</span>
                </a>
              </div>
            </div>

            <div className="border-t mt-15 md:mt-20 border-neutral-400 pt-5  flex flex-col sm:flex-row items-center justify-between">
              <p className="text-md font-medium ">Mayank Sapna Panwar</p>
              <p className="text-md font-medium ">mayankpanwar066@gmail.com</p>

              {/* <div className="flex items-center  gap-5 ">
                <img
                  className="w-4 h-4  mt-2"
                  src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg"
                  alt=""
                />
                <img
                  className="w-4 h-4 mt-2"
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  alt=""
                />
                <img
                  className="w-4 h-4 mt-2"
                  src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"
                  alt=""
                />
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
