/<template>
<main class="project-page">
    <h1>Projects Page</h1>
    <p>The latest projects I have been working on are 'StackDew Valley' and this website. This page will be updated periodically with new projects. 
      <br> This website was created using vite, Vue.js JS, and scss. In the near future I will adding some work in Python including Flask and SQL Lite3 to this list.
      <br>Applications in other languages will shortly be forthcoming and I am looking to collaborate with other developers on projects in the future.
    </p>
  <div>
    <Carousel />
  </div>
  <img src="../images/Symbol_torment_icon.webp" alt="Torment Symbol">
</main>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import { projects } from '../data/projects';

export default {
  components: { Carousel },
   data() {
        return {
            projects: projects
        }
    }
}
</script>

<style lang="scss" scope>
 .project-page {
  //display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  font-size: large;
  font-weight: 700;

  h1 {
    font-family: 'Audiowide';
    background: var(--santa-fe);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    color: var(--black-marlin);
    box-shadow: var(--black-marlin) 0 0 10px 10px;
  }

  img{
    margin-top:10px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    flex: content;
    h1 {
      font-size: 45px;
      padding: 10px;
    }
    .carousel-item {
      width: 100%;
      height: 100%;
      
      .nav-buttons {
          display: flex;
          flex-direction: column;
          margin-bottom:10px;
        }

      button {
        align-self: center;
      }
    }
    height: 100%;
    width: 80vw;
    padding-left: 10px;
    padding-right: 6%;
   }
 }
</style>