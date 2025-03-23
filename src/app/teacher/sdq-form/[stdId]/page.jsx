export default async function Sdq({ params }) {
  const { stdId: studentId } = await params;

  return (
    <div className="py-12">
      <h3 className="text-center text-lg font-semibold">
        การประเมิน SDQ ของ {studentId}
      </h3>
      {/* section-1 */}
      <div className="mt-4">
        <div className="flex my-2 w-full mx-auto text-lg">
          <h5 className="w-1/2">พฤติกรรมด้านอารมณ์</h5>
          <div className="flex w-1/2">
            <h5 className="w-1/3">ไม่จริง</h5>
            <h5 className="w-1/3">ค่อนข้างจริง</h5>
            <h5 className="w-1/3">จริง</h5>
          </div>
        </div>
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">มักจะบ่นว่า ปวดศีรษะ ปวดท้อง</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">กังวลใจหลายเรื่อง ดูกังวลเสมอ</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-2" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-2" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-2" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">
            เครียด ไม่ยอมห่างเวลาอยู่ในสถานการณ์ที่ไม่คุ้นและ
            ขาดความมั่นใจในตนเอง
          </h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-3" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-3" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-3" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ดูไม่มีความสุข ท้อแท้</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-4" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-4" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-4" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ขี้กลัว รู้สึกหวาดกลัวได้ง่าย</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-5" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-5" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-5" className="radio" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* section-2 */}
      <div className="mt-4">
        <div className="flex my-2 w-full mx-auto text-lg">
          <h5 className="w-1/2">
            พฤติกรรมด้านพฤติกรรมอยู่ไม่นิ่ง/ สมาธิสั้นอารมณ์
          </h5>
          <div className="flex w-1/2">
            <h5 className="w-1/3">ไม่จริง</h5>
            <h5 className="w-1/3">ค่อนข้างจริง</h5>
            <h5 className="w-1/3">จริง</h5>
          </div>
        </div>
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">อยู่ไม่นิ่ง นั่งนิ่ง ๆ ไม่ได้</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-6" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-6" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-6" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">อยู่ไม่สุข วุ่นวายอย่างมาก</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-7" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-7" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-7" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">วอกแวกง่าย สมาธิสั้น</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-8" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-8" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-8" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">คิดก่อนทำ</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-9" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-9" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-9" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ทำงานได้จนเสร็จ มีความตั้งใจในการทำงาน</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-10" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-10" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-10" className="radio" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* section-3 */}
      <div className="mt-4">
        <div className="flex my-2 w-full mx-auto text-lg">
          <h5 className="w-1/2">พฤติกรรมเกเร/ ความประพฤติ</h5>
          <div className="flex w-1/2">
            <h5 className="w-1/3">ไม่จริง</h5>
            <h5 className="w-1/3">ค่อนข้างจริง</h5>
            <h5 className="w-1/3">จริง</h5>
          </div>
        </div>
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">มักจะอาละวาด หรือโมโหร้าย</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-11" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-11" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-11" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">เชื่อฟัง มักจะทำตามที่ผู้ใหญ่ต้องการ</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-12" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-12" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-12" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">
            มักจะมีเรื่องทะเลาะวิวาทกับเด็กอื่น หรือรังแกเด็กอื่น
          </h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-13" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-13" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-13" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ชอบโกหก หรือขี้โกง</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-14" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-14" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-14" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ขโมยของของที่บ้าน ที่โรงเรียนหรือที่อื่น</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="question-15" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-15" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="question-15" className="radio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
