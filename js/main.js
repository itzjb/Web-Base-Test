function showPlanTable() { // 모든 section을 숨기고, 교육계획표만 표시하는 함수
    // 모든 section을 숨김
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // plan-section만 표시
    document.getElementById("plan-section").style.display = "block";
}

function showMainPG() { // 모든 section을 숨기고, 메인 페이지(사건선택)만 표시하는 함수
    // 모든 section을 숨김
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // mainPG만 표시
    document.getElementById("mainPG").style.display = "block";
}

function showCardnews() { // 모든 section을 숨기고, 카드뉴스만 표시하는 함수
    // 모든 section을 숨김
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // cards-section만 표시
    document.getElementById("cards-section").style.display = "block";
}

function showQuiz() {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById("quiz-section").style.display = "block";
}

function showNewssection() {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById("news-section").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    // 팝업 요소를 가져옴
    const popup = document.getElementById('popup');

    // 하루동안 안보기 상태 확인
    const hideUntil = localStorage.getItem('popupHideUntil');
    const now = new Date().getTime();
    
    // 하루동안 안보기가 설정되어 있고, 아직 시간이 지나지 않았다면 팝업을 표시하지 않음
    if (hideUntil && now < parseInt(hideUntil)) {
        popup.style.display = 'none';
        return;
    }

    // 팝업을 숨기는 함수 (HTML의 onclick="closePopup()"과 연결됩니다)
    // 전역 함수로 선언하여 HTML에서 직접 호출할 수 있게 합니다.
    window.closePopup = function() {
        popup.style.display = 'none'; // 팝업을 숨깁니다.
    };

    // 하루동안 안보기 함수
    window.closePopupForDay = function() {
        const checkbox = document.getElementById('hideForDay');
        if (checkbox && checkbox.checked) {
            // 24시간 후의 시간을 계산 (밀리초 단위)
            const tomorrow = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('popupHideUntil', tomorrow.toString());
        }
        popup.style.display = 'none';
    };

    // 팝업 외부 (오버레이) 클릭 시 팝업 숨기기
    popup.addEventListener('click', function(event) {
        if (event.target === popup) { // 클릭된 요소가 팝업 오버레이 자체인지 확인
            window.closePopup(); // 팝업을 닫습니다.
        }
    });

    // ✨ 페이지 로드 시 팝업 자동 표시 (하루동안 안보기가 설정되지 않은 경우에만)
    popup.style.display = 'flex'; // 페이지가 로드되면 팝업을 바로 띄웁니다.
});