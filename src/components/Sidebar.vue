/<template>
    <aside :class="`${isExpanded ? 'isExpanded': '' }`">
        <div class="logo">
            <img id="pfp" :onmouseover="play" src=".././images/pfp2.jpeg" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>

        <div class="menu">
            <h3>Menu</h3>
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">contact_page</span>
                <span class="text">About</span>
            </router-link>
             <router-link class="button" to="/projects">
                <span class="material-icons">terminal</span>
                <span class="text">Projects</span>
            </router-link>
             <router-link class="button" to="/profile">
                <span class="material-icons">emoji_people</span>
                <span class="text">Profile</span>
            </router-link>
             <router-link class="button" to="/contact">
                <span class="material-icons">perm_phone_msg</span>
                <span class="text">Contact</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>

    </aside>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(localStorage.getItem("isExpanded") === "true")

const toggleMenu = () => {
    isExpanded.value = !isExpanded.value
    localStorage.setItem("isExpanded", isExpanded.value)
}

</script>

<style lang="scss" scoped>
    aside{
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        overflow: hidden;
        min-height: 100%;
        padding: 1rem;

        background-color: var(--bossanova);
        color: var(--light);

        transition: 0.2 ease-out;

        #pfp {
            height: 50px;
            width: 50px;
            border-radius: 5px;
            // padding-right: 10px;
            &:hover{
                content: url(".././images/nameless.png");
            }

        }
        .flex {
            flex: 0.5 1 0;
        }

        .logo {
            margin: 0 -1rem;
            // margin-bottom: 1rem;
            // margin-top: 0.5rem;
            // margin-right: auto;
            // margin-left: 0px;
            padding: 0px;
            border-left: 0px;
            transition: transform 0.2s ease-in-out;

            &:hover {
                transform: scale(1.2);
                
                //box-shadow: rgba(16, 133, 94, 0.8) 0 0 25px 25px;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
            outline: none;

            position:static;
            // top: 0;
            transition: 0.5s ease-out;

            .menu-toggle {
                transition: 0.5s ease-out;

                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.5s ease-out;
                }

                &:hover {
                    .material-icons{
                        // box-shadow: rgba(16, 133, 94, 0.8) 0 0 5px 5px;
                        color: var(--primary);
                        transform: translateX(0.5rem);
                    }
                }
                &:focus {
                    outline: none;
                }
                
            }
        }
        // h3, .button .text {
        //     opacity: 0;
        //     transition: 0.3s ease-out;
        // }

        h3 {
            color:var(--light);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -1rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;
                outline: none;

                padding: 0.5rem 0.5rem;
                transition: 0.2s ease-out;

                .material-icons {
                    font-size: 2.5rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                    outline: none;
                    margin-bottom: 15px;

                }
                .text {
                    color: var(--light);
                    margin-left: 15px;
                    font-size: larger;
                    transition: 0.2s ease-out;
                }
                &:hover {
                    box-shadow: rgba(72, 135, 202, 0.8) 0 0 5px 5px;
                }
                &:hover, &.router-link-exact-active {
                    background-color: var(--dark-alt);
                    .material-icons, .text {
                        color: var(--primary);
                    }
                }

                &.router-link-exact-active {
                    border-right: 5px solid var(--primary);
                }
            }
        }

        &.isExpanded {
            width: var(--sidebar-width);
            #pfp {
                height: 100px;
                width: 100px;
                border-radius: 10px;
                padding-right: 0;
                margin-right: 0px;
                box-shadow: rgba(72, 135, 202, 0.8) 0 0 10px 10px;
             }
            .menu-toggle-wrap {
                top: -3rem;
                .menu-toggle {
                    margin-top: 5%;
                    transform: rotate(-180deg);
                }
            }

            h3, .button.text {
                opacity: 0;
                transition: 0.3s ease-out;
            }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }
        @media (max-width: 768px){
            position: fixed;
            z-index: 99;
        }
    }
aside button {
    outline: none;
}
    }
</style>
