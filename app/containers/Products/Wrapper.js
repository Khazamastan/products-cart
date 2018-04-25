import styled from "styled-components";

const Wrapper = styled.div`
    float: left;
    flex-wrap: wrap;
    display: flex;
    @media only screen and (max-width: 768px) {
        order: 1;
        width: 100%;
        margin : 10px;
    }
    .product-box{
        width: calc(25% - 10px);
        padding : 5px;
        @media only screen and (max-width: 1024px) {
          max-width: 33.3%;
          min-width: 33.3%;
        }
        @media only screen and (max-width: 768px) {
          max-width: 50%;
          min-width: 50%;
        }
        .box {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 3px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          display: inline-block;
          @media only screen and (max-width: 768px) {
          margin : 0px !important;
        }
        margin: 0 0px 10px 0px;
        position: relative;
        img {
          width: 100%;
        }
        .desc{
          padding: 15px 0 10px 0;
        }
        h2 {
          margin-left: 20px;
        }
        p {
          margin: 0 0 5px 20px;
          text-align:center;
        }
      }
      .add-to-cart{
          padding-top: 10px;
      }
      .add-to-cart-input{
          display: flex;
          justify-content: center;
          padding-top: 10px;
          border-radius : 3px;
          input{
          width: 50px;
          border: 1px solid #5585b9;
          text-align :center;
          }
          button:first-child{
          border-radius : 3px 0 0 3px;
          }
          button:last-child{
          border-radius : 0 3px 3px 0;
          }
      }
    }
  `;

export default Wrapper;