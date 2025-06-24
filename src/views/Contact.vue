/<template>
    <main class="contact-page">
        <h1>Contact Me</h1>
        <br>
        <div class="contacts">
          <p>Presently, you can contact me or see project-code or profiles using the following methods: </p><br>
          <div class="contact-items">
            <div class="contact-item">
              <img class="contact-item-image" src="../../src/icons/github-color.svg" alt="Github">
              <a href="https://github.com/TestMango-sudo">Testmango-sudo</a>
            </div>
            <div class="contact-item">
              <img class="contact-item-image" src="../../src/icons/linkedin.svg" alt="LinkedIn">
              <a href="https://www.linkedin.com/in/paul-mcdonagh-a956686a/">LinkedIn</a>
            </div>
            <div class="contact-item">
              <img class="contact-item-image" src="../../src/icons/email.svg" alt="Email">
              <a href="#" @click="emailMe">Email Me</a>
            </div>
          </div>
        </div>
    </main>
</template>

<script>
import myData from '../data/data.js';

export default {
  data() {
    return {
      data : myData
    }
  },
  methods: {
    emailMe(){
      window.location.href = `mailto:${this.data.email}`; 
  }
}
}
</script>

<style lang="scss" scoped>
.contact-page { 
  width: 96vw;
  font-size: xx-large;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    font-family: 'Audiowide';
    background: var(--santa-fe);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    color: var(--black-marlin)
  }

  .contact-items {
    display: inline-block;
    justify-content: center;
    text-align: center;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .contact-item-image{
    height: 100px;
    width: 100px;
    margin-right: 20px;
    margin-bottom: 20px;
 
    &:hover{
      transition: transform 0.3s ease-in-out;
      transform: scale(1.2);
      
    }
  }
  .contact-item a {
    font-size: larger;

    &:hover {
     text-shadow: 2px 2px 2px var(--bossanova);
    }
  }

  @media (max-width: 768px) {
    display: inline-block;
    align-items: center;
    width: 80vw;
    margin-right: 120px;

    h1 {
      font-size: 45px;
      padding: 5px;
    }
    .contact-items {
      display: flex;
      flex-direction: column;
      align-items: left;
      font-size: large;
    }
    .contact-item img{
      height: 70px;
      width: 70px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>