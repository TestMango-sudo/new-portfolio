<template>
    <main class="profile-page">
        <h1>Profile Page</h1>
        <p>Over the last year or so I have been diving into re-skilling with Python, JavaScript, HTML5, CSS3. <br>
          To Aid this learning I have completed two short courses with Hyperion Dev and Northcoders as follows:. <br>
          NorthCoders Javascript Software Development Bootcamp: This was a three month course mainly focused around JavaScript and it's frameworks and libraries, 
          culminating with the building of a three part full stack project and final full stack application built with a team of five of others. Partner Programming and working in teams of other coders was part of the course from very early on
          Hyperion Dev Python Software Development: This was a 10 week course focussing on the solidify the basics of Python and it's libraries. 4 projects were completed including a CRUD application using SQL Lite 3.
          <br>During these courses I have gotten to grips with various concepts of software development such as OOP, test-driven development and the sofwtare development life-cycle.
        </p>
        <br>
        <h3>Courses completed:</h3>
        <div class="course-info">
          <img id="course-icon" src="../icons/northcoders.png" alt="northcoders logo">
          <p>JavaScript Software Development</p>
          <img id="course-icon" src="../icons/hyperion.webp" alt="northcoders logo">
          <p>Python Software Development</p>
        </div>
        <h3>I have familiarity with the following Tech:</h3>
        <TechSlider />
      </main>

</template>

<script>
import TechSlider from '../components/TechSlider.vue'

export default {
  components: { TechSlider },
  methods: {
      playNameless() {
        const audio = new Audio("./src/sounds/updated-my-journal.wav")
        audio.play()
      }
    },
    mounted() {
      this.playNameless()
    }
}
</script>

<style lang="scss" scoped>
 .profile-page {
  font-size: large;
  font-weight: 500;
  min-height: 100%;
  justify-content: flex-end;
  margin: 2px;
  margin-left: 0px;

   h1 {
      width: 100%;
      font-family: 'Audiowide';
      background: var(--santa-fe);
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      color: var(--black-marlin)
    }

  .course-info{
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: "icon1 text1 icon2 text2";
    width: 50%;
    padding: 2px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    grid-template-columns: 25% 25% 25% 25%;
  }

  #course-icon {
    height: 100px;
    width: 100px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-right: 120px;

    .course-info{
    width: 100%;
    padding: 2px;
    grid-template-columns:40%;
    grid-template-rows: auto auto;
    grid-template-areas: "icon1 text1" "icon2 text2";
    grid-gap: 10px;
  }

  #course-icon {
        height: 80px;
        width: 80px;
        margin: 5px;
      }
  }

 }
 
</style>