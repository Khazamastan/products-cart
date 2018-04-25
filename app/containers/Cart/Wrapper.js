import styled from "styled-components";

const Wrapper = styled.div`
    min-width: 300px;
    border-radius: 3px;
    overflow: hidden;
    background: #fff;
    padding: 10px 20px;
    transition : all 0.3s ease-in;
    @media only screen and (max-width: 786px) {
        order: 0;
        width: 100%;
        margin : 10px;
    }
    #head {
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      align-items: flex-start;
    }
    p{
      margin: 0;
    }
    .item {
      display: inline-block;
      margin: 0;
      flex: 1 0 100px;
      min-width: 100px;
      margin-right: 5px;
    }
    .quantity {
      display: inline-block;
      margin-right: 5px;
      flex: 1 0 30px;
      min-width: 30px;
      text-align: center;
    }
    .total {
      display: inline-block;
      float: right;
      flex: 1 0 50px;
      min-width: 50px;
      text-align: center;
    }
    .del {
      flex: 1 0 50px;
      min-width: 50px;
      cursor: pointer;
      color: #5585b9;
      text-align: center;
    }
    .row {
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      &:last-child{
        border-bottom: 0px;
      }
      overflow: hidden;
      padding: 10px 0px;
      min-height: 40px;
      display: flex;
      align-items: flex-start;
      img {
        max-height: 40px;
        max-width: 40px;
        float: left;
        flex: 1 0 70px;
      }
      .row p::before, .box p::before, .totalprice::before {
        content: "$";
      }
    }
`;

export default Wrapper;