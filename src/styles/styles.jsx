import styled from "styled-components";

export const HomeSection = styled.section`
  .person_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1200px;
    margin: 1rem auto;
    padding: 0rem 1rem;
  }
  .popup {
    position: fixed;
    top: -30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--first-color);
    padding: 1rem;
    color: white;
    font-size: 20px;
    transition: 0.3s all ease-in-out;
  }
  .showpopup {
    top: 30%;
  }
  .closePopup {
    background: var(--second-color);
  }
  .heading {
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: 760px) {
    .person_container {
      grid-template-columns: repeat(2, 1fr);
    }
    .popup {
      top: -100%;
    }
    .showpopup {
      top: 50%;
    }
  }
  @media (max-width: 460px) {
    .person_container {
      grid-template-columns: repeat(1, 1fr);
    }
    .popup {
      top: -100%;
    }
    .showpopup {
      top: 50%;
    }
  }
`;

export const LoginDiv = styled.div`
  .signup_form {
    max-width: 1200px;
    background: var(--fourth-color);
    padding: 1rem 1rem;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;

    font-size: 20px;
  }

  .signup_form > h1 {
    text-align: center;
    text-transform: uppercase;
    color: black;
  }

  .form {
    width: 900px;
    padding: 1rem 1rem;
    margin: auto;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    p {
      color: black;
      span {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .btn {
    background: var(--first-color);
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }
  .login {
    margin: 1rem;
  }
  .formfield {
    display: flex;
    justify-content: space-between;
    width: 500px;
    label {
      color: black;
      font-weight: bolder;
    }
    input,
    select {
      width: 50%;
      padding: 5px 1rem;
      font-size: 18px;
    }
    select {
      cursor: pointer;
      text-transform: capitalize;
    }
  }

  @media (max-width: 760px) {
    .signup_form {
      width: 100vw;
      align-items: center;
    }
    .form {
      width: 100%;
    }
    .formfield {
      flex-direction: column;
      width: 90%;
      input,
      select {
        width: 100%;
      }
    }
  }
  @media (max-width: 460px) {
    .signup_form {
      width: 100vw;
      align-items: center;
    }
    .form {
      width: 100%;
    }
    .formfield {
      flex-direction: column;
      width: 90%;
      input,
      select {
        width: 100%;
      }
    }
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;

  span.name {
    font-size: 18px;
  }
  span.name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .profile_pic {
    border-radius: 50%;
  }
`;

export const Skeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;

  .skeleton_text {
    width: 200px;
    height: 0.5rem;
    margin-bottom: 5px;
    border-radius: 2px;
  }
  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;
