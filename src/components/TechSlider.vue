/<template>
  <div class="tech-stack">
    <h4 class="text-center text-gray-400 mb-8">Tech Stack</h4>
        <div class="logo-scroller">
            <div>
                <a href="#" id="vite" title="Vite"><img src="../../src/icons/vite.svg"/></a>
                <a href="#"><img title="Vue" src="../../src/icons/vue.svg"/></a>
                <a href="#"><img title="JavaScript" src="../../src/icons/js.svg"/></a>
                <a href="#"><img title="CSS" src="../../src/icons/css-3.svg"/></a>
                <a href="#"><img title="scss" src="../../src/icons/scss2.svg"/></a>
                <a href="#"><img title="Jest" src="../../src/icons/jest.svg"/></a>
                <a href="#"><img title="SuperTest" src="../../src/icons/test-js.svg"/></a>
                <a href="#"><img title="React" src="../../src/icons/react.svg"/></a>
                <a href="#"><img title="Python" src="../../src/icons/python.svg"/></a>
                <a href="#"><img title="Flask" src="../../src/icons/flask.svg"/></a>
                <a href="#"><img title="lodash" src="../../src/icons/lodash.svg"/></a>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .tech-stack {
        display:inline;
        flex-direction: row;
        flex:auto; 
        animation-direction: normal;
    }
    .tech-stack img{
        height: 100px;
        width: 100px;
        background-color: lightgrey;
        border-radius: 10px;
        padding:10px;
        margin: 10px;
        transition: transform 0.5s ease-in-out;

        &:hover {
            transform: scale(1.1);
            box-shadow: rgba(16, 133, 94, 0.8) 0 0 5px 5px;
        }
    @media (max-width: 768px) {
        height: 75px;
        width: 75px;
        margin: 8px;
        padding: 8px;
      }
    }
</style>