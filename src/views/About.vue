<template>
  <main class="about-page">
  <h1 class="fluctuating-box">About Me</h1>
  <div class="about-section">
    <br>
    <p>My name is Paul and I 'm a proud father of 2, living in north-west England. 
      <br>In this 'incarnation' as a aspiring software developer, I have been getting to grips with Python, JavaScript, HTML and CSS in an attempt to pivot to a new career. 
      <br>In the past I have worked in Tech Support, construction, engineering, customer service and manufacturing and I have gained a vast array of experience across a variety of industries and sectors.
      <br>Learning to code is something I always wanted to do since I was young and I have felt some tripdation about embarking on a journey like this so late. However, so far the experience has been interesting for me and there seems to be an endless amount to learn. I'd never thought that I'd be starting another career at my age, but this has been so enjoyable, I don't regret it.... yet! 😃   
      <br>In my spare time, I am an avid reader and gamer, both TTRPGs and PC (Torment is one of my favourite rpg's of all time and inspired this website) and when not reading or gaming you'll find me doing DIY projects. I recently built from scratch a 3.6m * 2m brick outbuilding with U-PVC windows doors and wooden-framed, tiled roof by myself. I have also renovated properties in the northwest and on the continent.
      <br>As a life long learner, I'm always learning new things and apart from coding I have also been trying to learn Spanish and Chinese.
      Presently I am building a couple of small projects using JavaScript, Vue, Vite and Phaser and working with a small team form Newcastle on a project in another language.
      <br>
      <img src="../images/Symbol_torment_icon.webp" alt="Torment Symbol">
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
      color: var(--black-marlin);
      box-shadow: var(--black-marlin) 0 0 10px 10px;
    }

  
  @media (max-width: 768px) {
    padding-left: 0.1rem;
    font-size: large;
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