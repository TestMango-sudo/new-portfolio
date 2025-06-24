<template>
  <main class="home-page">
    <h1>Paul McDonagh</h1>
    <div class="image-container" @mouseover="playAlright">
      <img class="default-image" id="pfp" src="../images/pfp2.jpeg" />
      <img class="hover-image" id="hover-pfp" src="../images/nameless.png"/>
    </div>
    <h2>Class: Junior Software Developer</h2>
    <p>Recent Backstory: A career change has been initiated. <br>
      In this incarnation as a software developer, I have spent some time getting to grips with Python, JavaScript, HTML and CSS. <br>
      This has been an exciting journey and there is still so much to learn. I am currently building a couple of small projects using Vue.js and Vite and phaser.<br>
       I am now hoping to strike out and find a party or company with which to increase my experience and hopefully be an dedicated and invaluable team member.
     </p>
     <div class="charsheet">
       <div class="char-details">
        <h2 id="char-header">Character Sheet</h2>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/name.svg"><h4>Name: Paul McDonagh</h4>
        </div>
         <div class="char-item">
        <img class="char-icon" src="../../src/icons/char/height.svg"><h4>Height: 187 cm</h4>
        </div>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/gender.svg"><h4>Pro-nouns: He/him</h4>
        </div>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/viking.svg"><h4>Class: Junior Dev</h4>
        </div>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/xp.svg"><h4>Experience: 3200xp</h4>
        </div>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/level.svg"><h4>Level: 2</h4>
        </div>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/skills.svg"><h4>Skills: See Profile</h4>
        </div>
        <div class="char-item">
          <img class="char-icon" src="../../src/icons/char/hp.svg"><h4>Hitpoints: Varies</h4>
        </div>
      </div>
     </div>    
   
    <!-- <TechSlider /> -->
  </main>
</template>

<script>
  import TechSlider from '../components/TechSlider.vue';
  

  export default {
    components: { TechSlider },
    data() {
      return {
        
      }
    },
    methods: {
      playNameless() {
        const audio = new Audio("../../src/sounds/gained-an-ability.wav")
        audio.play()
      },  
      playAlright() {
        const audio1 = new Audio("../../src/sounds/alright.wav")
        audio1.play()
      }
    },
    mounted() {
      this.playNameless()
    }
  }

</script>

<style lang="scss" scoped>
  .home-page {
    display: flex;
    // justify-content: center;
    //align-content: center;
    align-items: center;
    flex-direction: column;
    // height: 100%;
    width: 100vw;
    padding-right: 80px;

    .image-container {
      position: relative;
      width: 175px; /* Adjust as needed */
      height: 175px; /* Adjust as needed */
      margin: 10px;
    }

    .default-image, .hover-image {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      object-fit:fill;
      transition: opacity 0.5s ease-in-out;
    }

    .hover-image {
      opacity: 0;
    }

    .image-container:hover .hover-image {
      box-shadow: var(--bossanova) 0 0 10px 10px;
      transition: 2.5s ease-out;
      opacity: 1;
    }

    h1 {
      width: 100%;
      font-family: 'Audiowide';
      background: var(--santa-fe);
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      color: var(--black-marlin)
    }
    p {
      font-size: larger;
      font-weight: 300;
    }
    // #pfp{ 
    //   height: 150px;
    //   width: 150px;
    //   border-radius: 10px;
    //   margin: 10px;


    //   &:hover {
    //   transition: 2.5s ease-out;
    //   // transform: scale(1.2);
    //   box-shadow: var(--bossanova) 0 0 10px 10px;
    //   //margin-bottom: 20px;
    //   content: url(".././images/nameless.png");
    //   height: 150px;
    //   width: 150px;

    //    }
    // }
    .charsheet{
      height:100%;
      width: 50%;
      background: url("../../src/icons/char/parchment.svg");
      background-repeat: no-repeat;
      background-size:cover;
      padding: 85px;
      padding-top:80px;
    }
    
    .char-details{
      font-size: xx-large;
      display: grid;
      grid-auto-columns: auto;
      grid-auto-rows: auto;
      text-align: center;
    }
    .char-icon{
      height: 50px;
      width: 50px;
    }
    #char-header {
      font-family: 'Calligraphy';
      font-size: 76px;
    }
    

    @media (max-width: 768px) {
      width: 80vw;
      padding-right: 10px;
      margin-right: 20px;
      margin-left: auto;

      h1 {
        font-size: xx-large;
        padding: 10px;
      }


      .image-container {
        position: relative;
        width: 150px; /* Adjust as needed */
        height: 375px; /* Adjust as needed */
        margin: 10px;
      }

      .charsheet {
        background-size: contain;
         width: 100%;
         height: 100%;
         padding: 35px;
         
        .char-details {
          font-size: 16px;
        } 
        #char-header{
          font-size: x-large;
        }
        .char-icon {
          display: none;
        }
    }
  }
    

}


</style>
