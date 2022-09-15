<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <h2 class="section-heading">Projects I've Worked On:</h2>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-xl-6" style="position: relative">
        <div class="center-tablet-tab-port">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            class="img-fluid wde-tablet"
            src="../assets/img/wde-tablet.png"
            alt=""
          />
        </div>

        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          class="img-fluid wde-phone"
          src="../assets/img/wde-phone.png"
          alt=""
        />
      </div>
      <div class="col-xl-6">
        <p class="project-heading text-center pt-3">Water Damage Estimator</p>
        <p class="descriptive-text pt-3">
          In the past it took field technicians upwards of 30 minutes to create
          a estimate off of a scope sheet. With the help of the Water Damage
          Estimator, they can now create a much more accurate estimate in an
          average time of 5 minutes. All the technician needs to do is put in
          the measurements of the room they are working in and answer a few
          questions. This application will then automatically calculate how much
          equipment they will need and how much it will cost displaying it in a
          estimate format that can be shown to a customer.
        </p>
        <p class="descriptive-text pt-3">
          I worked solo on this project responsible for the front-end and
          back-end development of the entire application. Watching it grow to
          handle more and more has been nothing less than fantastic. I am proud
          to say I have created something that has met and surpassed the goals
          originally planned for it.
        </p>
        <p class="descriptive-text pt-3">
          I have done multiple presentations on this application all over
          Florida and trained multiple technicians how to use it. I cant wait to
          see what other challenges I will face in the future.
        </p>

        <p class="experience-heading pt-3 text-center">Technologies Used:</p>
        <div
          class="technologies-container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <p class="skills-additional">Vue 3</p>
          <p class="skills-additional">Node.js</p>
          <p class="skills-additional">Express.js</p>
          <p class="skills-additional">Mongoose</p>
          <p class="skills-additional">MongoDB</p>
          <p class="skills-additional">Auth0</p>
          <p class="skills-additional">Twillio Send Grid</p>
        </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-xl-6 text-center">
        <p class="project-heading pt-3">UWRG Leads</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <p class="descriptive-text pt-3">
          UWRG Leads is a web app that helps marketers at UWRG (United Water
          Restoration Group) organize leads and referrals in live time. Using
          socket.io and programable text SMS UWRG Leads is able to keep everyone
          on the same page at all times. A referrer signs up with a marketer
          they are familiar with and is then able to submit leads directly to
          that marketer. Each time a lead is submitted it sends a link to the
          lead details directly to the marketer via sms. It is then received and
          processed automatically syncing to a company google sheet.
        </p>
        <p class="descriptive-text pt-3">
          This is my second solo full-stack application at United Water
          Restoration Group, and I had a blast working on it! UWRG Leads was
          built with a Vite frontend and a powerful Node.js backend. Shipped
          with stunning UI using the latest SCSS practices and design trends.
          Please refer to the list below for some of the technologies used in
          UWRG Leads.
        </p>
      </div>
      <div class="col-xl-6">
        <!-- <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/img/uwrgleads-workspace.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/uwrgleads-enterNewLead.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/uwrgleads-leadDetails.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->
        <div class="pt-3"></div>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/o5wriLsOve0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="row pt-3 text-center"></div>
    <div class="row pt-3">
      <div class="col-12">
        <p class="experience-heading text-center">Technologies Used:</p>
        <div
          class="technologies-container"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <p class="skills-additional">Vite (Vue.js)</p>
          <p class="skills-additional">Node.js</p>
          <p class="skills-additional">Express.js</p>
          <!-- <p class="skills-additional">Mongoose</p> -->
          <p class="skills-additional">MongoDB</p>
          <p class="skills-additional">Auth0</p>
          <p class="skills-additional">Twillio Programable SMS</p>
          <p class="skills-additional">Socket.io</p>
          <p class="skills-additional">Google Address Autocomplete</p>
          <p class="skills-additional">Google Sheets Integration</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.project-heading {
  font-size: 50px;
  font-weight: 300;
}

.technologies-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  & p {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.4);
    border-radius: 40px;
    padding: 0.75rem 1.25rem !important;
  }
  @include respond(phone) {
    text-align: center;
    line-height: 1;
  }
}

.projects-ul {
  & li {
    display: inline;
  }
}
// WDE
.wde-phone {
  position: absolute;
  width: 400px;
  left: 41%;
  // bottom: -5%;
  top: 35%;
  @include respond(laptop) {
    width: 450px;
    left: 40%;
  }
  @include respond(tab-port) {
    display: none;
  }
}
.wde-tablet {
  width: 500px;
  @include respond(laptop) {
    width: 500px;
  }

  @include respond(tab-port) {
    width: 400px;
  }
}
</style>
