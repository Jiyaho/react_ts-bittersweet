import { useEffect } from 'react';
const { kakao }: any = window;

function KakaoMap() {
  useEffect(() => {
    //지도를 담을 영역의 DOM 레퍼런스
    const mapContainer = document.getElementById('map');

    //지도를 생성할 때 필요한 기본 옵션
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심 좌표
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됨.
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미함.
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);
  //컴포넌트가 처음 렌더링 될 때 지도를 띄우기 위해 두 번째 인자를 [](빈배열)로 설정

  return (
    <article
      id="map"
      style={{
        width: '100%',
        height: '70vh',
        backgroundColor: '#c8c8c8',
      }}
    ></article>
  );
}
export default KakaoMap;
