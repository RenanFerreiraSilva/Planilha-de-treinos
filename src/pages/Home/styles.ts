import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 28px 24px 40px;
  background: #0d0d12;
  color: #ffffff;
  box-sizing: border-box;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
`;

export const TopBar = styled.header`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  box-sizing: border-box;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  button {
    position: absolute;
    right: 0;
    margin: 0;
    height: 42px;
    padding: 0 18px;
    border: none;
    border-radius: 10px;
    background: #0ea5e9;
    color: #ffffff;
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #0284c7;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;

    button {
      position: static;
    }
  }
`;

export const CardsGrid = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
  justify-items: center;
  box-sizing: border-box;
`;

export const WorkoutCard = styled.article`
  width: 100%;
  max-width: 420px;
  margin: 0;
  padding: 26px;
  border-radius: 16px;
  background: #16161e;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 1.25;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  span {
    margin: 0;
    padding: 5px 12px;
    border-radius: 8px;
    background: rgba(14, 165, 233, 0.18);
    color: #38bdf8;
    font-size: 0.88rem;
    font-weight: 700;
  }

  button {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    color: #f87171;
    font-size: 0.88rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const WorkoutExercises = styled.ul`
  list-style: none;
  margin: 0;
  padding: 14px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  li {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: #d4d4d8;

    strong {
      color: #ffffff;
      flex-shrink: 0;
    }
  }
`;