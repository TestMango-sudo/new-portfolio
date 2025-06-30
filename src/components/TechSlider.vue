/<template>
  <div class="tech-stack">
    <h4>Tech Stack</h4>
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
                <a href="#"><img title="PIP" src="../../src/icons/pip.svg"/></a>
                <a href="#"><img title="Django" src="../../src/icons/django.svg"/></a>
                <a href="#"><img title="Node Package Manager" src="../../src/icons/npm.svg"/></a>
                <a href="#"><img title="Phaser" src="../../src/icons/phaser.png"/></a>
                <a href="#"><img title="SQL" src="../../src/icons/sql.svg"/></a>
                <a href="#"><img title="Lo-dash" src="../../src/icons/lodash.svg"/></a>
            </div>
        </div>
        <h4>Software</h4>
        <div class="logo-scroller">
            <div>
                <a href="#" title="VS Code"><img src="../../src/icons/software/vs-code.svg"/></a>
                <a href="#" title="Tiled"><img title="Tiled" src="../../src/icons/software/tiled-logo-white.png"/></a>
                <a href="#"><img title="Trello" src="../../src/icons/software/trello.svg"/></a>
                <a href="#"><img title="Discord" src="../../src/icons/software/discord.svg"/></a>
                <a href="#"><img title="Slack" src="../../src/icons/software/slack.svg"/></a>
                <a href="#"><img title="Windows" src="../../src/icons/software/windows.svg"/></a>
                <a href="#"><img title="Ubuntu" src="../../src/icons/software/ubuntu.svg"/></a>
                <a href="#"><img title="MS-DOS" src="../../src/icons/software/Msdos-icon.png"/></a>
                <a href="#"><img title="Insomnia" src="../../src/icons/software/Insomnia.svg"/></a>
                <a href="#"><img title="Postman" src="../../src/icons/software/Postman.svg"/></a>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    // .logo-scroller{
    //     display: flex;
    //     width: 100%;
    //     overflow-x: auto;
    //     white-space: nowrap;
    //     overflow-y: auto;
    //     padding: 5px;
    //     margin: 5px;
    //     animation: scroll 10s linear infinite;

    //     @keyframes scroll {
    //         0% {
    //         transform: translateX(100%);
    //         }
    //         100% {
    //         transform: translateX(-100%);
    //         }
    //     }
    // }
    .tech-stack {
        display:grid;
        overflow-y: scroll;
        grid-auto-rows: auto;
        grid-auto-columns: auto;
        // flex-direction: row;
        // flex:auto; 
        animation-direction: normal;
    }
    .tech-stack img{
        height: 100px;
        width: 100px;
        background-color: var(--chino);
        opacity: 0.7;
        border-radius: 10px;
        padding:10px;
        margin: 10px;
        transition: transform 0.5s ease-in-out;

        &:hover {
            opacity: 1;
            transform: scale(1.1);
            box-shadow: var(--minsk) 0 0 5px 5px;
        }
    @media (max-width: 768px) {
        height: 75px;
        width: 75px;
        margin: 8px;
        padding: 8px;
      }
    }
</style>