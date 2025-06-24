<template>
  <div class="settings-page">
    <h1>Settings</h1>
    <p>Settings page is under construction.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.settings-page {
    font-weight: 700;
    font-size: larger;
    flex-direction: column;
    min-height: 100%;
    width: 100vw;
    margin-top: 10px;
     
    p {
        margin: 15px;
    }
    h1 {
      font-family: 'Audiowide';
      background: var(--santa-fe);
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      color: var(--black-marlin);
      width: 100%;
      margin: 15px;
       }

  @media (max-width: 768px) {
    padding-left: 0.1rem;
    font-size: x-large;
    width: 100%;
    align-items: center;
    
    h1 {
      font-size: 45px;
      margin: 2px;
      padding: 2px;
      width: 95%;
    }
  }
}

</style>