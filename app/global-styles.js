import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,body{
    width: 100%;
    background-color: #fff;
    font-family: calibri, sans-serif;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    font-size: 12px;   
    color: #777777;
    }
    p,
    label {
      line-height: 1.5em;
    }
    .pull-left{
      float: left;
    }
    .pull-right{
      float: right;
    }
    .clearfix{
      clear: both;
    }
    ul{
      padding: 0px;
    }
  
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  h1{
    margin: 20px 0;
  }
  #app {
    max-width: 1140px;
    margin: 0px auto;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width: 840px) {
      flex-wrap : wrap;
    }
  }
  
.pull-right{
  float: right;
}
.space-between{
  display: flex;
  justify-content: space-between;
}
.margin-right-5{
  margin-right: 5px;
}
.close-button{
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  color: #fff;
}
.pad20{
  padding: 10px 20px;
}

.btn{
  padding: 6px 15px;
  cursor: pointer;
  background: #5585b9;
  color: #fff;
}

.bold{
  font-weight: bold;
}
select{
  padding: 10px 20px;
  background: #fff;
  width: 200px;
  margin-bottom : 20px;
  border : 1px solid #f5f5f5;
}
.strike{
  display : inline-block;
  padding-left : 5px;
  text-decoration : line-through;
}
`;