<template>
  <div>
    <div class="home-content">
      <a href='/jokes'>Do you wanna here some jokes from me?</a>
      <img src='../assets/old-man.png'/>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome To Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place to find dad jokes"
        }
      ]
    };
  }
};
</script>
<style media="screen" scoped>
  .home-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100vh;
    position: relative;
    background: url('../assets/bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .home-content img{
    width: 50%;
    height: 80vh;
    min-width: 350px;
    min-height: 400px;
  }
  .home-content a{
    min-width: 350px;
    padding: 1rem;
    background: #f8f8f8;
    color: #526488;
    min-height: 100px;
    display: flex;
    align-items: center;
    border-radius:20px;
    box-shadow: 0 2px 14px #222;
    animation: floating 3s linear alternate infinite
  }
  .home-content a:hover{
    animation-play-state: paused;
  }
  @media(max-width: 866px){
    .home-content a{
      position: absolute;
      bottom: 20px;
      left: 5px;
    }
  }
  @keyframes floating {
    100%{
      transform: translate(0, -20px);
    }
  }
</style>
