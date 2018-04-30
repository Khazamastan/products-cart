import styled from "styled-components";

export const OuterWrapper = styled.div`
    margin : 0 20px 10px 0;
    .view-mode {
      height : 40px;
      display : flex;
      align-items : center;
      a{
        cursor: pointer;
        padding-right : 10px;
        &:last-child{
          padding-left : 10px;
        }
      }
      a.active{
        font-weight: bold;
      }
    }
`

export const Wrapper = styled.div`
    float: left;
    flex-wrap: wrap;
    display: flex;
    @media only screen and (max-width: 840px) {
        order: 1;
        width: 100%;
        margin : 10px;
    }
    .product-box{
        width: 25%;
        padding : 5px;
        @media only screen and (max-width: 1024px) {
          max-width: 33.3%;
          min-width: 33.3%;
        }
        @media only screen and (max-width: 840px) {
          max-width: 50%;
          min-width: 50%;
        }
        .box {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 3px;
          border : 1px solid #f5f5f5;
          // box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          display: inline-block;
          @media only screen and (max-width: 840px) {
           margin : 0px !important;
          }
        margin: 0 0px 10px 0px;
        position: relative;
        .img-container{
          display: flex;
          height : 180px;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          margin: auto;
          display: block;
        }
        .desc{
          padding: 0 15px;
        }
        h2 {
          margin-left: 20px;
        }
        p {
          margin: 0 0 5px 0px;
          text-align:center;
        }
      }
      .no-stock{
        padding-top: 10px;
        padding-bottom: 10px;
        color : #ff5555;
      }
      .add-to-cart{
          padding-top: 10px;
      }
        .add-to-cart-input{
          display: flex;
          justify-content: center;
          padding-bottom: 10px;
          padding-top: 10px;
          border-radius : 3px;
          input{
            width: 50px;
            text-align :center;
          }
          button{
            border-radius: 50px;
            width: 20px;
            height: 20px;
            text-align: center;
            padding: 0;
            background : transparent;
            border : 1px solid #ff5555;
            color : #ff5555;
          }
      }
      &.row{
        width : 100%;
        .box{
          display : flex;
          .img-container{
            height : 80px;
            padding : 10px;
            align-items : center;
          }
          p{
            text-align: left;
          }
          .add-to-cart-input{
            padding-top: 10px;
            justify-content: flex-start;
          }
        }
      }
    }
  `;
