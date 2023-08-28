import { MenuDetailType } from '../../../utils/types';

function FormOfMenuDetail({
  temperature,
  menuName_ko,
  menuName_en,
  menuDesc,
  imgsrc,
  imgalt,
  열량,
  나트륨,
  포화지방,
  단백질,
  당류,
  카페인,
}: MenuDetailType) {
  return (
    <article>
      <div>
        <ul>
          <li>🌡️ {temperature}</li>
          <li>{menuName_ko}</li>
          <li>{menuName_en}</li>
          <li>{menuDesc}</li>
        </ul>
        <img src={imgsrc} alt={imgalt} />
      </div>
      <div>
        <ul>
          <li>제공량 (Size)</li>
          <li>스몰 (Small): 355ml</li>
          <li>미디엄 (Medium): 473ml</li>
          <li>라지 (Large): 591ml</li>
        </ul>
        <ul>
          <li>제품 영양 정보 (Nutritional information)</li>
          <li>1회 제공량 기준: 355ml (Size: Small)</li>
        </ul>
        <div>
          <ul>
            <li>열량 (kcal)</li>
            <li>나트륨 (mg)</li>
            <li>포화지방 (g)</li>
            <li>단백질 (g)</li>
            <li>당류 (g)</li>
            <li>카페인 (mg)</li>
          </ul>
          <ul>
            <li>{열량}</li>
            <li>{나트륨}</li>
            <li>{포화지방}</li>
            <li>{단백질}</li>
            <li>{당류}</li>
            <li>{카페인}</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default FormOfMenuDetail;
