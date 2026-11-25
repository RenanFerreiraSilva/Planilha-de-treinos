import styled from 'styled-components';

export const FormWrapper = styled.section<{ $bgImage: string }>`
  width: 100%;
  min-height: 100vh;
  padding: 24px;
  background-image: linear-gradient(rgba(10, 10, 14, 0.72), rgba(10, 10, 14, 0.78)),
    url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FormCard = styled.form`
  width: 100%;
  max-width: 500px;
  margin-left: 48%;
  padding: 32px 36px;
  border-radius: 16px;
  background: rgba(18, 18, 24, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);

  @media (max-width: 900px) {
    max-width: 100%;
    margin-left: 0;
    padding: 24px 20px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #e4e4e7;
  }

  input {
    height: 44px;
    padding: 0 14px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.45);
    }

    &:focus {
      border-color: #38bdf8;
      background: rgba(255, 255, 255, 0.12);
    }
  }
`;

export const SubmitButton = styled.button`
  height: 46px;
  margin-top: 4px;
  border: none;
  border-radius: 10px;
  background: #0ea5e9;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #0284c7;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ExerciseRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px auto;
  gap: 8px;
  align-items: end;
`;

export const AddExerciseButton = styled.button`
  height: 44px;
  padding: 0 14px;
  border: 1px solid rgba(56, 189, 248, 0.5);
  border-radius: 10px;
  background: rgba(14, 165, 233, 0.16);
  color: #38bdf8;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(14, 165, 233, 0.28);
  }
`;

export const ExerciseList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 130px;
  overflow-y: auto;
  padding-right: 4px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    font-size: 0.85rem;
    color: #e4e4e7;

    button {
      background: transparent;
      border: none;
      color: #f87171;
      font-size: 0.8rem;
      cursor: pointer;
    }
  }
`;

export const SecondaryButton = styled.button`
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #e4e4e7;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.38);
  }
`;