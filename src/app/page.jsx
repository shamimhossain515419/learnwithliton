import Courses from "@/components/Home/Courses";
import FAQ from "../components/Home/FAQ";
import Feedback from "../components/Home/Feedback";
import Hero from "../components/Home/Hero";
import Instructor from "../components/Home/Instructor";
import Needknow from "../components/Home/Needknow";
import Courses_project from "../components/Home/courses-project";
import Courses_modules from "../components/Home/courses_modules";
import CoursesProcess from "../components/Home/courses_process";
import Success_story from "../components/Home/success_story";
export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <Courses_modules />
      <Courses_project />
      <Courses />
      <CoursesProcess />
      <Needknow />
      <Instructor />
      <Success_story />
      <Feedback />
      <FAQ />
    </main>
  );
}
