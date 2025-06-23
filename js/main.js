document.addEventListener('DOMContentLoaded', function() {
    // 팝업 요소를 가져옴
    const popup = document.getElementById('popup'); // HTML에서 id="popup"으로 설정했으니, 그대로 사용합니다.

    // 팝업을 숨기는 함수 (HTML의 onclick="closePopup()"과 연결됩니다)
    // 전역 함수로 선언하여 HTML에서 직접 호출할 수 있게 합니다.
    window.closePopup = function() {
        popup.style.display = 'none'; // 팝업을 숨깁니다.
    };

    // 팝업 외부 (오버레이) 클릭 시 팝업 숨기기
    popup.addEventListener('click', function(event) {
        if (event.target === popup) { // 클릭된 요소가 팝업 오버레이 자체인지 확인
            window.closePopup(); // 팝업을 닫습니다.
        }
    });

    // ✨ 페이지 로드 시 팝업 자동 표시 (이미지에 보이는 것처럼 하려면 이 부분을 사용하세요)
    popup.style.display = 'flex'; // 페이지가 로드되면 팝업을 바로 띄웁니다.
});

function showPlanTable() {
    // 모든 section을 숨김
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // plan-section만 표시
    document.getElementById("plan-section").style.display = "block";
}

function showMainPG() {
    // 모든 section을 숨김
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // plan-section만 표시
    document.getElementById("mainPG").style.display = "block";
}

function showCardnews() {
    // 모든 section을 숨김
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // plan-section만 표시
    document.getElementById("cards-section").style.display = "block";
}