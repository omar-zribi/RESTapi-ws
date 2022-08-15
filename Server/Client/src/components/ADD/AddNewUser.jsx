import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";

const AddNewUser = () => {
  const [fullName, setFullName] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const NEWuSER = { fullName, sex, email, phone };
    dispatch(addUser(NEWuSER));
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
      <button id="add" onClick={openModal}>Add User</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form id="form" onSubmit={handlesubmit}>
          <section>
            <label id="label">Full name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
      
            />
          </section>
          <section>
            <label id="label">Sex</label>
            <input id="sex" 
            value={sex}
             onChange={(e) => setSex(e.target.value)} placeholder="male / female " />
              
            
          </section>
          <section>
            <label id="label">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section>
            <label id="label">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone===""?alert('add your number phone'):setPhone(e.target.value)}
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

export default AddNewUser;
