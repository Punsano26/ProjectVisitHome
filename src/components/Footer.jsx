import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <div className="footer">
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
          <aside>
            <img className="w-20 h-20" src="../logoschool.png" alt="" />
            <p>
              โรงเรียนบางแพปฐมพิทยา
              <br />
              159 หมู่ 3 ต.บางแพ อ.บางแพ จ.ราชบุรี 70160
            </p>
        
          </aside>
          <nav>
            <h6 className="footer-title">ช่องทางติดต่อ</h6>
            <a className="link link-hover">โทรศัพท์ :</a>
            <a className="link link-hover">โทรสาร :</a>
          </nav>
          <nav>
            <h6 className="footer-title">เกี่ยวกับ</h6>
            <a className="link link-hover">ทะเบียนวัดผลโรงเรียนบางแพปฐมพิทยา</a>
            <a className="link link-hover">
              เว็บแอดมิน ว่าที่ร้อยตรี ภูวดล ปิ่นกูล
            </a>
            <a className="link link-hover">Software Engineering</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
