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
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">กังวลใจหลายเรื่อง ดูกังวลเสมอ</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
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
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ดูไม่มีความสุข ท้อแท้</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ขี้กลัว รู้สึกหวาดกลัวได้ง่าย</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* section-2 */}
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
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">กังวลใจหลายเรื่อง ดูกังวลเสมอ</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
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
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ดูไม่มีความสุข ท้อแท้</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ขี้กลัว รู้สึกหวาดกลัวได้ง่าย</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* section-3 */}
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
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">กังวลใจหลายเรื่อง ดูกังวลเสมอ</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
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
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ดูไม่มีความสุข ท้อแท้</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>{" "}
        <div className="flex my-1 w-full mx-auto">
          <h5 className="w-1/2">ขี้กลัว รู้สึกหวาดกลัวได้ง่าย</h5>
          <div className="flex w-1/2">
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>{" "}
            <div className="w-1/3">
              <input type="radio" name="radio-1" className="radio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
