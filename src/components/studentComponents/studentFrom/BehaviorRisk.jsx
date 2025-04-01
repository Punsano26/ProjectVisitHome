import React from 'react'

const BehaviorRisk = () => {
  return (
    <div>
      <div className="card w-80 md:w-full bg-base-100 card-md shadow-sm md:px-20 md:py-10">
        <div className='card-body flex flex-col'>
          <h2 className='card-title text-center'>ข้อมูลพฤติกรรมและความเสี่ยง</h2>
          {/* สุขภาพ */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <legend className="fieldset-legend text-base">
              สุขภาพ ( ตอบได้มากกว่า 1 ข้อ ) <span className="text-red-600">*</span>
            </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 text-base">
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ร่างกายแข็งแรง</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ร่างกายไม่แข็งแรง</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>มีภาวะทุพโภชนาการ</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>สมรรถภาพทางร่างกายต่ำ</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>มีโรคประจำตัวหรือเจ็บป่วยบ่อย</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ป่วยเป็นโรคร้ายแรง/เรื้อรัง</span>
                </label>
                
              </div>
            </fieldset>
          </div>
          {/* สวัสดิการหรือความปลอดภัย */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <legend className="fieldset-legend text-base">
              สวัสดิการหรือความปลอดภัย ( ตอบได้มากกว่า 1 ข้อ ) <span className="text-red-600">*</span>
            </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 text-base">
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ไม่มีความเสี่ยงใดๆ</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>พ่อแม่แยกทางกัน หรือ แต่งงานใหม่</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>มีบุคคลในครอบครัวเจ็บป่วยด้วยโรคร้าย</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>บุคคลในครอบครัวเล่นการพนัน</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ไม่มีผู้ดูแล</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ถูกทารุณ/ทำร้ายจากบุคคลในครอบครัว/เพื่อนบ้าน</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>เล่นการพนัน</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>บุคคลในครอบครัวติดสารเสพติดแรง/เรื้อรัง/ติดต่อ</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>มีความขัดแย้ง/ทะเลาะกันในครอบครัว</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ความขัดแย้งและมีการใช้ความรุนแรงในครอบครัว</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="chekbox" name="status" className="checkbox" />
                  <span>ถูกล่วงละเมิดทางเพศ</span>
                </label>
              </div>
            </fieldset>
          </div>
          {/* ระยะทางระหว่างบ้านกับโรงเรียน */}
          <fieldset className="fieldset flex-1 min-w-[250px]">
              <legend className="fieldset-legend">
              ระยะทางระหว่างบ้านไปโรงเรียน <span className="text-red-600">*</span>
              </legend>
              <div className="flex items-center gap-2">
                <input
                  className="input validator"
                  type="number"
                  placeholder="ระบุระยะทาง"
                />
                <span className="text-gray-600">กิโลเมตร</span>
              </div>
              
            </fieldset>
            <fieldset className="fieldset flex-1 min-w-[250px]">
              <legend className="fieldset-legend">
              ใช้เวลาเดินทาง <span className="text-red-600">*</span>
              </legend>
              <div className="flex items-center gap-4">
                <input
                  className="input validator"
                  type="number"
                  placeholder="0"
                />
                <span className="text-gray-600">ชั่วโมง</span>
                <input
                  className="input validator"
                  type="number"
                  placeholder="0"
                />
                <span className="text-gray-600">นาที</span>
              </div>
              
            </fieldset>
          {/* การเดินทางของนักเรียนยไปโรงเรียนเป็นอย่างไร */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <legend className="fieldset-legend text-base">
              การเดินทางของนักเรียนไปโรงเรียนเป็นอย่างไร <span className="text-red-600">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 text-base">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ผู้ปกครองมาส่ง</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>รถจักรยานยนต์</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>รถยนต์</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>เดิน</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>รถโดยสารประจำทาง</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>รถโรงเรียน</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>รถจักรยาน</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>
                    อื่นๆ ระบุ
                    <input
                      className="input validator w-24 sm:w-32 md:w-40 lg:w-52 ml-2"
                      type="text"
                      placeholder="บุคคลอื่นๆ"
                    />
                  </span>
                </label>
              </div>
            </fieldset>
          </div>
          {/* ภาระงานความรับผิดชอบของนักเรียนที่มีต่อครอบครัว */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <legend className="fieldset-legend text-base">
              ภาระงานความรับผิดชอบของนักเรียนที่มีต่อครอบครัว ( ตอบได้มากกว่า 1 ข้อ )
              <span className="text-red-600">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 text-base">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ช่วยงานบ้าน</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ช่วยคนดูแลคนเจ็บป่วย/พิการ</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ช่วยค้าขายเล็กๆน้อยๆ</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ทำงานพิเศษแถวบ้าน</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ช่วยงานในนาไร่</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>
                    อื่นๆ ระบุ
                    <input
                      className="input validator w-24 sm:w-32 md:w-40 lg:w-52 ml-2"
                      type="text"
                      placeholder="บุคคลอื่นๆ"
                    />
                  </span>
                </label>
              </div>
            </fieldset>
          </div>
          {/* กิจกรรมยามว่างหรืองานอดิเรก */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <legend className="fieldset-legend text-base">
              กิจกรรมยามว่างหรืองานอดิเรก ( ตอบได้มากกว่า 1 ข้อ )
              <span className="text-red-600">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 text-base">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ดูทีวี / ฟังเพลง</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ไปเที่ยวห้าง / ดูหนัง</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>อ่านหนังสือ</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ไปหาเพื่อน / เพื่อน</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>แว้น / สก๊อย</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>เล่นเกม คอม / มือถือ</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ไปสวนสาธารณะ</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>เล่นดนตรี</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>
                    อื่นๆ ระบุ
                    <input
                      className="input validator w-24 sm:w-32 md:w-40 lg:w-52 ml-2"
                      type="text"
                      placeholder="บุคคลอื่นๆ"
                    />
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* หน้าถัดมาส่วนที่ 2 จะเป็นข้อมูลเกี่ยวกับพฤติกรรมและความเสี่ยงของนักเรียน */}
          {/* พฤติกรรมการใช้สารเสพติด */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <legend className="fieldset-legend text-base">
              พฤติกรรมการใช้สารเสพติด ( ตอบได้มากกว่า 1 ข้อ )
              <span className="text-red-600">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 text-base">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ไม่ได้เกี่ยวข้องกับสารเสพติดใดๆทั้งทางตรงและทางอ้อม</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>สมาชิกในครอบครัวข้องเกี่ยวกับยาเสพติด</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>คบเพื่อนในกลุ่มที่ใช้สารเสพติด</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ปัจจุบันเกี่ยวข้องกับสารเสพติด</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>อยู่ในสภาพแวดล้อมที่ใช้สารเสพติด</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>เป็นผู้ติดบุหรี่ สุรา หรือการใช้สารเสพติดอื่นๆ</span>
                </label>
              </div>
            </fieldset>
          </div>
          {/* พฤติกรรมการใช้ความรุนแรง */}
          {/* พฤติกรรมทางเพศ */}
          {/* การติดเกม */}
          {/* การเข้าถึงสื่อคอมพิวเตอร์และอินเตอร์เน็ตที่บ้าน */}
          {/* การใช้เครื่องมือสื่อสารอิเล็กทรอนิกส */}
        </div>
      </div>
    </div>
  )
}

export default BehaviorRisk