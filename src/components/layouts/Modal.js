import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 102vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);

  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 248px;
    height: auto;
    max-height: 210px;
    background-color: var(--cor-branca);
    border-radius: 12px;

    p{
      margin-top: 33px;
      margin-bottom: 47px;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;

      color: #000000;
    }
  }

  .fechar{
    position: absolute;
    top: 26px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 28px;
    padding: 0;
    box-sizing: border-box;
    /* border-radius: 3px; */
    background-color: var(--cor-branca);

    p{
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 20px;
      text-align: center;

      color: #000000;
    }
  }

  .botoes{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 204px;
    height: auto;
    margin-bottom: 10px;
    gap: 14px;
    box-sizing: border-box;
  }

  .fechar:hover{
    cursor: pointer;
  }
`;

export {Modal};