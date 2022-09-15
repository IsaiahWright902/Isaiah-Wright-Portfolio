<template>
  <div class="container">
    <div class="row pt-4">
      <div class="col-12">
        <h2 class="section-heading">Experience:</h2>
      </div>
    </div>

    <div class="row pt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-1">
                <img
                  class="experience-company-logo"
                  src="../assets/img/UWRG-logo-sm.png"
                  alt=""
                />
              </div>
              <div class="col-xl-11">
                <p class="experience-heading">Technical Project Manager</p>
                <p class="experience-company">United Water Restoration Group</p>
                <p class="experience-heading-2nd">June 2022 - Present</p>
                <p class="experience-heading-2nd">
                  Ormond Beach, Florida, United States
                </p>
                <p class="experience-responsibilities">
                  - Manage and administer all aspects of front-end and back-end
                  development infrastructure.
                </p>
                <p class="experience-responsibilities">
                  - Improved performance and incorporated new features by
                  modifying design parameters.
                </p>
                <p class="experience-responsibilities">
                  - Created two full-stack applications from concept to
                  production individually.
                </p>
                <p class="experience-responsibilities">
                  - Develop product goals and requirements in close
                  collaboration with management and other associates.
                </p>
                <p class="experience-responsibilities">
                  - Enabled implementation of new and optimized company
                  processes.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-1"></div>
              <div class="col-xl-11">
                <p class="experience-heading">Full-Stack Developer</p>
                <p class="experience-heading-2nd">April 2021 - June 2022</p>
                <p class="experience-heading-2nd">
                  Ormond Beach, Florida, United States
                </p>
                <p class="experience-responsibilities">
                  - Devised and implemented project plans and multiple utility
                  applications in line with business needs.
                </p>
                <p class="experience-responsibilities">
                  - Oversaw project development milestones from initial steps
                  through final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-1">
                <img
                  class="experience-company-logo"
                  src="../assets/img/codeworks.png"
                  alt=""
                />
              </div>
              <div class="col-xl-11">
                <p class="experience-heading">Software Development Student</p>
                <p class="experience-company">Boise Code Works</p>
                <p class="experience-heading-2nd">January 2020 - April 2020</p>
                <p class="experience-heading-2nd">
                  Boise, Idaho, United States
                </p>
                <p class="experience-responsibilities">
                  13 Week immersive course completed 500+ hours learning and
                  utilizing best practices in software development.
                </p>
                <p class="experience-responsibilities">
                  Built full stack applications utilizing modern tech stacks
                  such as JavaScript, .Net, and Vue.js
                </p>
                <p class="experience-responsibilities">
                  Used Scrum and Sprint planning in order to effectively
                  collaborate in a team.
                </p>
                <p class="experience-responsibilities">
                  Learned design patterns such as MVC to make an application
                  more secure.
                </p>
                <p class="experience-responsibilities">
                  Certificate of Completion (2020)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.experience-company-logo {
  width: 100px;
  @include respond(phone) {
    width: 75px;
  }
}

.experience-heading {
  font-size: 24px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}

.experience-company {
  font-size: 22px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
}

.experience-heading-2nd {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  @include respond(phone) {
    font-size: 20px;
  }
}

.experience-responsibilities {
  font-size: 18px;
  @include respond(phone) {
    font-size: 14px;
  }
}
</style>
