<template>
<div class="carousel">
  <div class="carousel-item active" v-for="(project, index) in projects" :key="index">
    <h2>{{ project.title }}</h2>
    <img :src="project.imgSrc"/>
    <h3>Project Type: {{ project.type }}</h3>
    <p>{{ project.description }}</p>
    <div class="nav-buttons">
        <a :href="project.siteLink"><button>Hosted Project</button></a><a :href="project.codeLink"><button :href="project.codeLink">Visit Project Code</button></a>
    </div>
  </div>
</div>
</template>

<script>
import { projects } from '../data/projects.js';

export default {
    data() {
        return {
            projects: projects
        }
    }
}
</script>

<style lang="scss" scoped>
    .carousel {
        margin-top: 20px;
        color: var(--light);
        display: flex;
        min-width: 50%;
        overflow-x: scroll;
        overflow:scroll;
        scroll-snap-type: x mandatory;
    }
    .carousel-item {
        h2 {
            font-size: xx-large;
            margin-bottom: 10px;
            color: var(--minsk)
        }
        p {
            font-size: large;
            font-weight: 500;
        }

        .nav-buttons {
            display: block;
        }
        button{
            background-color: var(--santa-fe);
            color: var(--asphalt);
            font-weight: bold;
            margin: 10px 10px;
            box-shadow: rgba(141, 93, 156, 0.8) 0 0 5px 5px;

            &:hover{
                box-shadow: rgba(78, 27, 107, 0.8) 0 0 10px 10px;
            }
        }
        align-content: center;
        background-color: var(--avocado);
        border-radius: 5px;
        margin: 10px;
        scroll-snap-align: center;
        flex-shrink: 0;
        width: 50%;
    }

    .carousel img {
        height: 50%;
        width: 50%
    }
    
</style>