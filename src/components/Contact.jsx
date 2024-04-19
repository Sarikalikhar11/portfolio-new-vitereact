import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col col-lg-12">
            <div>
              <h2 className="text-center fw-bold">Contact</h2>
              <p className="text-center fw-semibold mt-3">
                Submit the form below to get in touch with me
              </p>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <form
                onSubmit={handleSubmit}
                method="POST"
                action="https://getform.io/f/2a8a75bf-c987-4c35-864c-9ee4f23cf7bf"
                className="form d-flex flex-column align-items-center w-100 ms-5 me-5"
              >
                {success && (
                  <div className="bg-success border border-success text-success px-4 py-3 rounded mb-8 text-white">
                    <p>Your message has been sent successfully!</p>
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control my-2 p-2 bg-transparent border-2 rounded text-white outline-none"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                    className="form-control my-2 p-2 bg-transparent border-2 rounded text-white "
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    rows="4"
                    cols=""
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    className="form-control my-2 p-2 bg-transparent border-2 rounded outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="form-control w-25 d-flex align-items-center my-2 cursor-pointer text-black-100 fw-semibold text-bg-warning rounded-pill px-3 py-2 outline-none"
                >
                  Let's Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
