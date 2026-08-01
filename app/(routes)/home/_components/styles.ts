import { theme } from "@/app/_styles/theme";
import styled from "styled-components";

export const ContactUsCardStyled = styled.div`
  margin: 3rem 0;
  padding: 2.8rem;
  border-radius: 40px;
  max-width: 50rem;
  background-color: ${theme.colors.whiteSmoke};
  color: ${theme.colors.secondaryText};

  .title-container {
    padding-bottom: 1.8rem;
    .title {
      padding-bottom: 0.5rem;
      font-weight: 600;
      font-size: 2.5rem;
      color: ${theme.colors.black};
    }
    .message {
      margin: 1rem 0;
      font-size: 18px;
      line-height: 28px;
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;

    .form-item {
      display: flex;
      flex-direction: column;
      padding-bottom: 2.5rem;
      user-select: none;

        label {
          margin: 0 0 0.4rem 0.5rem;
          font-weight: 600;
        }
        .input {
          font-size: 16px;
          min-height: 32px;
          height: auto;
          padding: 8px 12px;
          transition: border-color 150ms ease 0s;
          border-color: rgb(255, 255, 255);
          background-color: rgb(255, 255, 255);
          border-width: 3px;
          border-style: solid;
          border-radius: 16px;
        }
        textarea.input {
          resize: none;
          overflow: hidden;
        }
      }
  }`;