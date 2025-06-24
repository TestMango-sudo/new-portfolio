<template>
  <main class="about-page">
  <h1>About Me</h1>
  <div class="about-section">
    <br>
    <p>My name is Paul and I 'm a proud father of 2, living in north-west England. 
      <br>In this 'incarnation' as a aspiring software developer, I have spent some time getting to grips with Python, JavaScript, HTML and CSS. 
      In the past I have worked in Tech Support, construction, engineering, customer service and manufacturing and I have gained a vast array of experience across these industries.
      <br>Learning to code has as far been an interesting journey for me to take and there is still so much to learn. I'd never thought that I'd be starting another career at my age, but this has been so enjoyable, I don't regret it.... yet! 😃   
      <br>In my spare time, I am an avid reader and gamer (Planescape Torment is one of my favourite rpg's of all time and inspired this website) and when not reading or gaming you'll find me doing DIY projects. I recently built from scratch a 3.6m * 2m brick outbuilding with U-PVC windows doors and tiled roof by myself.
      <br>As a life long learner, I'm always learning new things and apart from coding I have also been trying to learning Spanish and Chinese.
      I am currently building a couple of small projects using JavaScript, Vue, Vite and Phaser and working with a small team form Newcastle on a small project in another language.
      <br>
      <img src="../images/lop.png" alt="ladyofpain">
    </p>
    <br>
  </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .about-page {
  display: flex;
  font-weight: 700;
  font-size: larger;
  flex-direction: column;
  min-height: 100%;
  min-width: 60%;
  
  .about-section {
    padding-left: 10%;
    padding-right: 10%;

    img {
      margin-top:20px;
      border-radius: 20px;
      margin-left: 10px;
    }
  }
  h1 {
      font-family: 'Audiowide';
      background: var(--santa-fe);
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      color: var(--black-marlin)
    }

  @media (max-width: 768px) {
    padding-left: 0.1rem;
    font-size: x-large;
    width: 100%;
    align-items: center;
    h1 {
      font-size: 55px;
      margin: 2px;
      padding: 2px;
      width: 95%;
    }
    img {
      height: 200px;
      width: 200px;
      margin-left: 10px;
      margin-top: 20px;
    }

    .about-section {
      padding-left: 1%;
      padding-right: 1%;
    }

  }
 }
</style>