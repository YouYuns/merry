import React, { useEffect } from "react";
import "../css/Link.css";
import linkIcon from "../images/link-icon.png";

const LinkShare: React.FC = () => {
  const urlToShare = window.location.href;

  useEffect(() => {
    const kakao = window.Kakao;

    // SDK 로드 여부 확인
    if (!kakao) {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    // SDK 초기화 (한 번만)
    if (!kakao.isInitialized()) {
      kakao.init("6bbdbe14cfee86bf2c09a3d16aa9bc79"); // 본인의 JavaScript Key 사용
    }

    // 카카오톡 공유 버튼 생성
    kakao.Share.createScrapButton({
      container: "#kakaotalk-sharing-btn",
      requestUrl: urlToShare,
    });
  }, [urlToShare]);

  // 링크 복사
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(urlToShare)
      .then(() => {
        alert("청첩장 링크가 복사되었습니다!");
      })
      .catch(() => {
        alert("복사에 실패했습니다. 직접 복사해주세요.");
      });
  };

  return (
    <div className="link-share-container">
      <div className="link-share-buttons">
        {/* 카카오톡 공유 버튼 */}
        <div className="share-btn-wrapper">
          <div id="kakaotalk-sharing-btn" style={{ cursor: "pointer" }}>
            <img
              src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
              alt="카카오톡 공유"
            />
          </div>
          <span className="share-label">카카오톡 공유하기</span>
        </div>

        {/* 링크 복사 버튼 */}
        <div className="share-btn-wrapper">
          <button className="share-btn link" onClick={copyToClipboard}>
            <img src={linkIcon} alt="링크 복사" />
          </button>
          <span className="share-label">청첩장 링크 복사하기</span>
        </div>
      </div>
    </div>
  );
};

export default LinkShare;
