import styled from 'styled-components';

export const Container = styled.div`
  margin: 48px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding: 24px;
  max-width: 360px;

  border-radius: 8px;
  background-color: #fff;

  box-shadow: 0 1px 4px rgba(50, 100, 150, 0.25);

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 12px rgba(50, 100, 150, 0.25);
  }
`;
