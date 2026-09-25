document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     AOS
  ===================================================== */

  if (window.AOS) {

    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70
    });

  }


  /* =====================================================
     PRELOADER
  ===================================================== */

  const preloader =
    document.getElementById("preloader");


  function hidePreloader() {

    if (!preloader) {
      return;
    }

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

  }


  if (document.readyState === "complete") {

    hidePreloader();

  } else {

    window.addEventListener(
      "load",
      hidePreloader
    );

  }


  setTimeout(
    hidePreloader,
    1800
  );


  /* =====================================================
     DARK / LIGHT MODE
  ===================================================== */

  const themeToggle =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");

  const html =
    document.documentElement;


  const savedTheme =
    localStorage.getItem("theme") || "dark";


  html.setAttribute(
    "data-bs-theme",
    savedTheme
  );


  updateThemeIcon(
    savedTheme
  );


  if (themeToggle) {

    themeToggle.addEventListener(
      "click",
      () => {

        const currentTheme =
          html.getAttribute(
            "data-bs-theme"
          );


        const newTheme =
          currentTheme === "dark"
            ? "light"
            : "dark";


        html.setAttribute(
          "data-bs-theme",
          newTheme
        );


        localStorage.setItem(
          "theme",
          newTheme
        );


        updateThemeIcon(
          newTheme
        );

      }
    );

  }


  function updateThemeIcon(theme) {

    if (!themeIcon) {
      return;
    }


    themeIcon.className =
      theme === "dark"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

  }


  /* =====================================================
     NAVBAR / SMOOTH SCROLL
  ===================================================== */

  const navbar =
    document.querySelector(
      ".navbar-glass"
    );


  const navLinks =
    document.querySelectorAll(
      ".navbar .nav-link"
    );


  const navbarCollapse =
    document.getElementById(
      "navbarNav"
    );


  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const href =
            link.getAttribute(
              "href"
            );


          if (
            !href ||
            href === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              href
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });


          if (
            navbarCollapse &&
            navbarCollapse.classList.contains(
              "show"
            )
          ) {

            bootstrap.Collapse
              .getOrCreateInstance(
                navbarCollapse
              )
              .hide();

          }

        }
      );

    });


  /* =====================================================
     ACTIVE NAV LINK
  ===================================================== */

  const sections =
    document.querySelectorAll(
      "section[id]"
    );


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(
          entry => {

            if (!entry.isIntersecting) {
              return;
            }


            const id =
              entry.target.id;


            navLinks.forEach(
              link => {

                link.classList.remove(
                  "active"
                );


                if (
                  link.getAttribute(
                    "href"
                  ) === `#${id}`
                ) {

                  link.classList.add(
                    "active"
                  );

                }

              }
            );

          }
        );

      },

      {
        threshold: 0.35
      }

    );


  sections.forEach(
    section => {
      observer.observe(
        section
      );
    }
  );


  /* =====================================================
     NAVBAR SCROLL EFFECT
  ===================================================== */

  window.addEventListener(
    "scroll",
    () => {

      if (navbar) {

        if (
          window.scrollY > 40
        ) {

          navbar.classList.add(
            "scrolled"
          );

        } else {

          navbar.classList.remove(
            "scrolled"
          );

        }

      }

    }
  );


  /* =====================================================
     SCROLL TOP
  ===================================================== */

  const scrollTopBtn =
    document.getElementById(
      "scrollTopBtn"
    );


  function updateScrollButton() {

    if (!scrollTopBtn) {
      return;
    }


    scrollTopBtn.style.display =
      window.scrollY > 450
        ? "flex"
        : "none";

  }


  window.addEventListener(
    "scroll",
    updateScrollButton
  );


  updateScrollButton();


  if (scrollTopBtn) {

    scrollTopBtn.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =====================================================
     SKILLS DATA
  ===================================================== */

  const skillsData = {

    backend: {

      title:
        "Backend Development",

      icon:
        '<i class="fa-solid fa-server"></i>',

      heading:
        "Building reliable server-side applications",

      description:
        "My backend work focuses on APIs, application logic, data access and maintainable architecture.",

      technologies: [
        "C#",
        "C++",
        "ASP.NET Core",
        "ASP.NET MVC",
        "Node.js",
        "REST APIs",
        "Entity Framework Core"
      ],

      uses: [

        {
          icon:
            "fa-solid fa-plug",

          title:
            "REST APIs",

          text:
            "Building endpoints that connect frontend applications with backend services."
        },

        {
          icon:
            "fa-solid fa-layer-group",

          title:
            "Architecture",

          text:
            "Organizing applications into clean and maintainable layers."
        },

        {
          icon:
            "fa-solid fa-code",

          title:
            "Business Logic",

          text:
            "Implementing application rules using C#, .NET and Node.js."
        },

        {
          icon:
            "fa-solid fa-database",

          title:
            "Data Access",

          text:
            "Connecting applications with databases using Entity Framework Core."
        }

      ]

    },


    frontend: {

      title:
        "Frontend Development",

      icon:
        '<i class="fa-solid fa-display"></i>',

      heading:
        "Creating responsive and modern interfaces",

      description:
        "I build interfaces that are clean, interactive and responsive across desktop and mobile devices.",

      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React",
        "Responsive Design"
      ],

      uses: [

        {
          icon:
            "fa-solid fa-mobile-screen",

          title:
            "Responsive UI",

          text:
            "Building layouts that adapt smoothly across different screen sizes."
        },

        {
          icon:
            "fa-solid fa-wand-magic-sparkles",

          title:
            "Interaction",

          text:
            "Adding useful animations, transitions and user feedback."
        },

        {
          icon:
            "fa-brands fa-bootstrap",

          title:
            "Bootstrap",

          text:
            "Creating responsive reusable components and page layouts."
        },

        {
          icon:
            "fa-brands fa-react",

          title:
            "React",

          text:
            "Building component-based interfaces for interactive applications."
        }

      ]

    },


    database: {

      title:
        "Database Development",

      icon:
        '<i class="fa-solid fa-database"></i>',

      heading:
        "Designing structured and reliable data systems",

      description:
        "I work with relational and NoSQL databases and connect them to backend applications.",

      technologies: [
        "SQL Server",
        "MongoDB",
        "Entity Framework Core",
        "Database Design",
        "SQL Queries",
        "CRUD Operations"
      ],

      uses: [

        {
          icon:
            "fa-solid fa-table",

          title:
            "SQL Server",

          text:
            "Designing relational databases and managing structured application data."
        },

        {
          icon:
            "fa-solid fa-diagram-project",

          title:
            "Relationships",

          text:
            "Creating relationships between application entities and database tables."
        },

        {
          icon:
            "fa-solid fa-magnifying-glass",

          title:
            "Queries",

          text:
            "Writing queries for filtering, retrieving and managing application data."
        },

        {
          icon:
            "fa-solid fa-leaf",

          title:
            "MongoDB",

          text:
            "Working with document-based NoSQL data when appropriate."
        }

      ]

    },


    tools: {

      title:
        "Tools & Fundamentals",

      icon:
        '<i class="fa-solid fa-screwdriver-wrench"></i>',

      heading:
        "The tools behind my development workflow",

      description:
        "My workflow includes version control, debugging, modern IDEs and programming fundamentals.",

      technologies: [
        "Git",
        "GitHub",
        "Visual Studio",
        "VS Code",
        "OOP",
        "Problem Solving"
      ],

      uses: [

        {
          icon:
            "fa-brands fa-git-alt",

          title:
            "Git",

          text:
            "Tracking code changes and managing project versions."
        },

        {
          icon:
            "fa-brands fa-github",

          title:
            "GitHub",

          text:
            "Managing repositories and sharing development work."
        },

        {
          icon:
            "fa-solid fa-bug",

          title:
            "Debugging",

          text:
            "Finding and fixing errors using development and browser tools."
        },

        {
          icon:
            "fa-solid fa-brain",

          title:
            "Problem Solving",

          text:
            "Breaking down programming problems into clear technical solutions."
        }

      ]

    }

  };


  const skillModal =
    document.getElementById(
      "skillModal"
    );


  const skillModalTitle =
    document.getElementById(
      "skillModalTitle"
    );


  const skillModalIcon =
    document.getElementById(
      "skillModalIcon"
    );


  const skillModalHeading =
    document.getElementById(
      "skillModalHeading"
    );


  const skillModalDescription =
    document.getElementById(
      "skillModalDescription"
    );


  const skillModalTechnologies =
    document.getElementById(
      "skillModalTechnologies"
    );


  const skillModalUses =
    document.getElementById(
      "skillModalUses"
    );


  function openSkillModal(
    skillKey
  ) {

    const data =
      skillsData[
        skillKey
      ];


    if (
      !data ||
      !skillModal
    ) {
      return;
    }


    skillModalTitle.textContent =
      data.title;


    skillModalIcon.innerHTML =
      data.icon;


    skillModalHeading.textContent =
      data.heading;


    skillModalDescription.textContent =
      data.description;


    skillModalTechnologies.innerHTML =
      data.technologies
        .map(
          technology =>
            `<span>${technology}</span>`
        )
        .join("");


    skillModalUses.innerHTML =
      data.uses
        .map(
          item => `

            <div class="col-sm-6">

              <div class="skill-use-card">

                <i class="${item.icon}"></i>

                <h4>
                  ${item.title}
                </h4>

                <p>
                  ${item.text}
                </p>

              </div>

            </div>

          `
        )
        .join("");


    bootstrap.Modal
      .getOrCreateInstance(
        skillModal
      )
      .show();

  }


  document
    .querySelectorAll(
      ".skill-card"
    )
    .forEach(
      card => {

        card.addEventListener(
          "click",
          () => {

            openSkillModal(
              card.dataset.skill
            );

          }
        );


        card.addEventListener(
          "keydown",
          event => {

            if (
              event.key === "Enter" ||
              event.key === " "
            ) {

              event.preventDefault();

              openSkillModal(
                card.dataset.skill
              );

            }

          }
        );

      }
    );


  /* =====================================================
     PROJECTS DATA
  ===================================================== */

  const projectsData = {

    ecommerce: {

      title:
        "Full-Stack E-Commerce Website",

      image:
        "../css/Screenshot 2026-09-21 114909.png",

      description:
        "A complete online shopping platform built with Node.js and JavaScript, featuring product management, shopping cart functionality, REST-style backend communication and a responsive frontend.",

      technologies: [
        "Node.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST API"
      ],

      code:
        "https://github.com/eng-ali-ramadan",

      demo:
        "https://e-commerce-2-drab.vercel.app",

      goal:
        "Create a complete online shopping experience that connects an intuitive user interface to backend application services.",

      development:
        "The application combines product management, frontend interactions, shopping-cart functionality and server-side logic.",

      result:
        "A complete end-to-end e-commerce application demonstrating both frontend and backend web development."

    },


   


restaurant: {

      title:
        "Restaurant Ordering & Table Reservation System",

      image:
        "../css/Screenshot 2026-09-21 115433.png",

      description:
        "A full-stack restaurant management platform built with ASP.NET Core MVC, covering online food ordering, table reservations, an admin dashboard, and a live kitchen view.",

      technologies: [
        "ASP.NET Core MVC",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "ASP.NET Identity"
      ],

      code:
        "https://github.com/eng-ali-ramadan/restaunts-ys.git",

      demo:
        "https://aklny.tryasp.net/",

      goal:
        "Build a complete restaurant management system covering customer ordering, staff/kitchen operations, and admin management in one platform.",

      development:
        "Worked as part of a 3-person team, splitting the system into three modules: Admin Management (dashboard, CRUD for dishes/categories/coupons/tables), Staff/Kitchen & Operations (live kitchen view, reservation confirmations, order receipts), and Customer & Public View (menu browsing, cart & checkout, order tracking, and reservations). The data layer (models, DbContext, seeding, and an Identity-protected controller example) was scaffolded first as the project's foundation.",

      result:
        "A working restaurant management platform with role-based modules, live order/reservation tracking, and a seeded SQL Server database, deployed and demoed live."

    },


    finance: {

      title:
        "Personal Finance Manager",

      image:
        "../css/Screenshot 2026-09-25 113111.png",

      description:
        "A .NET application for recording personal income and expenses, categorizing transactions, monitoring balances and managing budgets.",

      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server"
      ],

      code:
        "https://github.com/eng-ali-ramadan",

      demo:
        "https://aliamadan.tryasp.net/",

      goal:
        "Provide users with a simple system for organizing and understanding personal financial activity.",

      development:
        "The project uses ASP.NET Core, Entity Framework Core and SQL Server to connect application logic with persistent financial data.",

      result:
        "A functional finance-management application demonstrating .NET development and relational database integration."

    }

  };


  const projectModal =
    document.getElementById(
      "projectModal"
    );


  const projectModalTitle =
    document.getElementById(
      "projectModalTitle"
    );


  const projectModalImage =
    document.getElementById(
      "projectModalImage"
    );


  const projectModalDescription =
    document.getElementById(
      "projectModalDescription"
    );


  const projectModalTechnologies =
    document.getElementById(
      "projectModalTechnologies"
    );


  const projectModalCode =
    document.getElementById(
      "projectModalCode"
    );


  const projectModalDemo =
    document.getElementById(
      "projectModalDemo"
    );


  const projectModalGoal =
    document.getElementById(
      "projectModalGoal"
    );


  const projectModalDevelopment =
    document.getElementById(
      "projectModalDevelopment"
    );


  const projectModalResult =
    document.getElementById(
      "projectModalResult"
    );


  function openProjectModal(
    projectKey
  ) {

    const data =
      projectsData[
        projectKey
      ];


    if (
      !data ||
      !projectModal
    ) {
      return;
    }


    projectModalTitle.textContent =
      data.title;


    projectModalImage.src =
      data.image;


    projectModalImage.alt =
      data.title;


    projectModalDescription.textContent =
      data.description;


    projectModalTechnologies.innerHTML =
      data.technologies
        .map(
          tech =>
            `<span>${tech}</span>`
        )
        .join("");


    projectModalCode.href =
      data.code;


    projectModalGoal.textContent =
      data.goal;


    projectModalDevelopment.textContent =
      data.development;


    projectModalResult.textContent =
      data.result;


    if (data.demo) {

      projectModalDemo.href =
        data.demo;

      projectModalDemo.style.display =
        "inline-flex";

    } else {

      projectModalDemo.removeAttribute(
        "href"
      );

      projectModalDemo.style.display =
        "none";

    }


    bootstrap.Modal
      .getOrCreateInstance(
        projectModal
      )
      .show();

  }


  document
    .querySelectorAll(
      ".project-card"
    )
    .forEach(
      card => {

        card.addEventListener(
          "click",
          () => {

            openProjectModal(
              card.dataset.project
            );

          }
        );


        card.addEventListener(
          "keydown",
          event => {

            if (
              event.key === "Enter" ||
              event.key === " "
            ) {

              event.preventDefault();

              openProjectModal(
                card.dataset.project
              );

            }

          }
        );

      }
    );


  /* =====================================================
     CERTIFICATES ACCORDION
  ===================================================== */

  const certificateCards =
    document.querySelectorAll(
      ".certificate-card"
    );


  certificateCards.forEach(
    card => {

      card.addEventListener(
        "click",
        () => {

          const wrapper =
            card.closest(
              ".certificate-wrapper"
            );


          const alreadyOpen =
            wrapper.classList.contains(
              "open"
            );


          document
            .querySelectorAll(
              ".certificate-wrapper"
            )
            .forEach(
              item => {

                item.classList.remove(
                  "open"
                );

              }
            );


          if (!alreadyOpen) {

            wrapper.classList.add(
              "open"
            );

          }

        }
      );

    }
  );


  /* =====================================================
     CONTACT FORM
     نفس خدمة FormSubmit الأصلية
  ===================================================== */

  const form =
    document.getElementById(
      "contactForm"
    );


  const submitBtn =
    document.getElementById(
      "submitBtn"
    );


  const statusMessage =
    document.getElementById(
      "statusMessage"
    );


  if (
    form &&
    submitBtn &&
    statusMessage
  ) {

    form.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        submitBtn.disabled =
          true;


        submitBtn.innerHTML = `
          Sending...
          <i class="fa-solid fa-spinner fa-spin ms-2"></i>
        `;


        statusMessage.className =
          "alert mt-3 text-center d-none";


        const formData = {

          name:
            form.name.value,

          email:
            form.email.value,

          _subject:
            form.subject.value,

          message:
            form.message.value,

          _captcha:
            "false"

        };


        try {

          const response =
            await fetch(

              "https://formsubmit.co/ajax/a06446a6624a0cf1031e05a25c62cd38",

              {

                method:
                  "POST",

                headers: {

                  "Content-Type":
                    "application/json",

                  "Accept":
                    "application/json"

                },

                body:
                  JSON.stringify(
                    formData
                  )

              }

            );


          if (!response.ok) {

            throw new Error(
              "Message failed"
            );

          }


          statusMessage.className =
            "alert alert-success mt-3 text-center";


          statusMessage.innerHTML = `
            <i class="fa-solid fa-circle-check me-2"></i>
            Message sent successfully!
          `;


          form.reset();


        } catch (error) {

          statusMessage.className =
            "alert alert-danger mt-3 text-center";


          statusMessage.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            Something went wrong. Please try again.
          `;


        } finally {

          submitBtn.disabled =
            false;


          submitBtn.innerHTML = `
            Send Message
            <i class="fa-solid fa-paper-plane ms-2"></i>
          `;

        }

      }
    );

  }

});