import "../css/Cover.css";

function Cover() {
  return (
    <div className="cover-container">
      {/* 배경 이미지 + 어둠 레이어 */}
      <div className="cover-bg">
        <div className="cover-overlay" />
      </div>

      {/* 중앙 LOVE IS */}
      <div className="cover-texts">
        <div className="center-text">
          <span className="text-love">LOVE</span>
          <span className="text-is">IS</span>
        </div>

        {/* 아래 LIFE + 라인 */}
        <div className="text-bottom">
          <span className="text-life">LIFE</span>
          <span className="line"></span>
        </div>
      </div>

      {/* 왼쪽/오른쪽 아래 작은 텍스트 */}
      <div className="cover-footer">
        <span className="footer-left">wedding</span>
        <span className="footer-right">invitation</span>
      </div>
    </div>
  );
}

export default Cover;
