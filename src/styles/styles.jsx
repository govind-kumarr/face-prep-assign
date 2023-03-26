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
  .skelton {
  }

  @media (max-width: 760px) {
    .person_container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 460px) {
    .person_container {
      grid-template-columns: repeat(1, 1fr);
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

  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;

  span.name {
    font-size: 18px;
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
