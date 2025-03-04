import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <img
          src="./hero-school.jpg"
          alt="school"
          className="h-[360px] w-screen object-cover"
        />
        <h1 className="text-white text-2xl md:text-4xl p-2 font-bold text-center">
          ระบบบันทึกการเยี่ยมบ้านโรงเรียนบางแพปฐมพิทยา
        </h1>
      </div>
    </div>
  );
}
