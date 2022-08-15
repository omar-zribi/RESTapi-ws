import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/action";

const EditUser = ({user}) => {
  const [fullName, setFullName] = useState(user.fullName);
  const [sex, setSex] = useState(user.sex);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const EDITuSER = { fullName, sex, email, phone,_id:user._id };
    dispatch(editUser(EDITuSER));
    closeModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit User</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handlesubmit}>
          <section>
            <label>Full name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </section>
          <section>
            <label>Sex</label>
            <input id="sex" value={sex} onChange={(e) => setSex(e.target.value)} placeholder="Write the gender in English, male or female " />
              
            
          </section>
          <section>
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section>
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </section>
          <section>
            <button type="submit">Add</button>
            <button onClick={closeModal}>Cancel</button>
          </section>
        </form>
      </Modal>
    </div>
  );
};

export default EditUser;
