import React, { useState } from 'react';
import '../css/Modal.css';
import ContactModal from '../components/ContactModal';
import sDad from '../images/1.jpg';
import sMom from '../images/1.jpg';
import sMain from '../images/1.jpg';
import eMain from '../images/1.jpg';
import eMom from '../images/1.jpg';

const Contact: React.FC = () => {
  const [modalInfo, setModalInfo] = useState<{ name: string; phone: string } | null>(null);

  const groom = {
    main: { name: "신랑 이성욱", src: sMain, phone: "010-1111-1111" },
    family: [
      { name: "아버지 이경식", src: sDad, phone: "010-2222-2222" },
      { name: "어머니 최경숙", src: sMom, phone: "010-3333-3333" },
    ],
  };

  const bride = {
    main: { name: "신부 임은진", src: eMain, phone: "010-4444-4444" },
    family: [
      { name: "어머니 김정숙", src: eMom, phone: "010-5555-5555" },
    ],
  };

  const renderPerson = (
      person: { name: string; src: string; phone: string },
      key: string
    ) => (
      <div
        key={key} // 여기서 key 지정
        className="person"
        onClick={() => setModalInfo({ name: person.name, phone: person.phone })}
        style={{ cursor: 'pointer' }}
      >
        <img src={person.src} alt={person.name} className="person-img" />
        <p className="person-name">{person.name}</p>
      </div>
    );

  return (
    <div className='container'>
      <div className='contact__sub_title'>Contact Information</div>
      <div className='contact__title'>연락처 확인하기</div>

      <div className=" account-container">
        <div className="profiles">
          <div className="profile-group">
            <div className="main-person">{renderPerson(groom.main, 'groom-main')}</div>
            <div className="family-persons">
              {groom.family.map((person, i) => renderPerson(person, `groom-${i}`))}
            </div>
          </div>

          <div className="profile-group">
            <div className="main-person">{renderPerson(bride.main, 'bride-main')}</div>
            <div className="family-persons">
              {bride.family.map((person, i) => renderPerson(person, `bride-${i}`))}
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {modalInfo && (
        <ContactModal
          name={modalInfo.name}
          phone={modalInfo.phone}
          closeModal={() => setModalInfo(null)}
        />
      )}
    </div>
  );
};

export default Contact;
