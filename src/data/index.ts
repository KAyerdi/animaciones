import { Sketch } from "../types/Sketch";
import EarthSphere from "./sketches/blobbyEarth/Earth";
import Galaxy from "./sketches/galaxy/Galaxy";
import HomePage from "./sketches/HomePage";
import InteractiveCubes from "./sketches/InteractiveCubes";
import Neurons from "./sketches/Neurons";
import InteractiveEarth from "./sketches/particlesEarth/InteractiveEarth";
import ParticleSphere from "./sketches/ParticleSphere";
import SparklingParticles from "./sketches/SparklingParticles";
import SparklingSphere from "./sketches/SparklingSphere";

const sketches: Sketch[] = [
  {
    id: "homepage",
    title: "Welcome",
    author: "Kevin Ayerdi Perticarari",
    thumbnailURL: "/sidebar/welcome.png",
    component: HomePage,
  },
  {
    id: "blobby-earth",
    title: "Blobby Earth",
    author: "Kevin",
    thumbnailURL: "/sidebar/blobbyEarth.png",
    component: EarthSphere,
  },
  {
    id: "neurons",
    title: "Neurons",
    author: "Kevin",
    thumbnailURL: "/sidebar/neurons.png",
    component: Neurons,
  },
  {
    id: "sparkling-sphere",
    title: "Sparkling Sphere",
    author: "Kevin",
    thumbnailURL: "/sidebar/sparklingSphere.png",
    component: SparklingSphere,
  },
  {
    id: "particle-sphere",
    title: "Particle Sphere",
    author: "Kevin",
    thumbnailURL: "/sidebar/particleSphere.png",
    component: ParticleSphere,
  },
  {
    id: "cubes",
    title: "Interactive Cubes",
    author: "Kevin",
    thumbnailURL: "/sidebar/interactiveCubes.png",
    component: InteractiveCubes,
  },
  {
    id: "interactive-earth",
    title: "Interactive Earth",
    author: "Kevin",
    thumbnailURL: "/sidebar/interactiveEarth.png",
    component: InteractiveEarth,
  },
  {
    id: "galaxy",
    title: "Galaxy",
    author: "Kevin",
    thumbnailURL: "/sidebar/galaxy.png",
    component: Galaxy,
  },
  {
    id: "sparkling-particles",
    title: "Sparkling Particles",
    author: "Kevin",
    thumbnailURL: "/sidebar/particles.png",
    component: SparklingParticles,
  },
];

export default sketches;
