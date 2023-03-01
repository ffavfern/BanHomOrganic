import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "./header";
import Footer from "./footer";


export default function Home() {
  return (
    <>
      <Header />
      {/* Content-Top */}
      <section className="container">
        <div className="top">
          <Image href="/organic.png" alt="organic" width="700" height="688" />
          <div className="descript">
            <h1>ผักออแกนิก</h1>
            <p>
              ผลผลิตจากการเกษตรที่ได้ผ่านกระบวนการผลิตทาง
              เกษตรที่ปลอดสารเคมีทุกชนิดที่จะเป็นอันตรายต่อมนุษย์ สัตว์
              และสิ่งแวดล้อม ตลอดจนกระบวนการเลี้ยง การปลูก
              ต้องมีการดูแลอย่างพิถีพิถันก่อนที่จะเริ่มการปลูกก็จะต้อง
              เตรียมหน้าดินด้วยวิธีธรรมชาติ เมล็ดพันธุ์ที่เลือกมาปลูก
              ต้องสะอาดปลอดภัย เรียกได้ว่าตั้งแต่เริ่มต้นจนจบกระบวนการ
              ต้องผ่านการดูแลอย่างพิถีพิถัน ตามหลักมาตรฐานสากล
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
