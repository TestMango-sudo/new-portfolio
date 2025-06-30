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
        flex-direction: row;
        align-items: stretch;
        min-width: 50%;
        overflow-x: scroll;
        overflow:scroll;
        scrollbar-color: var(--santa-fe) var(--chino);
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: auto;
        padding: 10px;
        gap: 10px;
        
        :-webkit-scrollbar-track {
            background: var(--chino);
        }

        @media (max-width: 768px) {
            padding: 7px;
            .carousel-item img {
                height:  150px;
                width: 175px;
            }
        }

    }
    .carousel-item {
        height:75vh;
        padding: 10px;
        
        h2 {
            font-size: xx-large;
            margin-bottom: 10px;
            color: var(--minsk);
            text-shadow: 2px 2px 2px var(--bossanova);
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
        background-color: var(--chino);
        opacity: 0.8;
        border-radius: 5px;
        margin: 10px;
        scroll-snap-align: center;
        flex-shrink: 0;
        width: 50%;

        &:hover {
            opacity: 1;
            box-shadow: rgba(78, 27, 107, 0.8) 0 0 10px 10px;
            transition: box-shadow 0.3s ease-in-out;
        }
    }

    .carousel img {
        height: 50%;
        width: 50%
    }
    
</style>