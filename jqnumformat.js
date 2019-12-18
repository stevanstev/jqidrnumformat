let formattingMoney = (isCustom=0,separatorStr="",startCustom="",endCustom="") => {
  let formatting = $(".formatting");
    //Invalid if user added number after endCustom string
  let getMoney = isCustom === 1 ? formatting.val().split(endCustom)[0] : formatting.val();
  //Remove all non digit for processing
  getMoney = getMoney.replace(/[^0-9]/g,"");
  let getLength = getMoney.length;
  let result;

  let recursiveNumber = (number,length,separator) => {
      let result = "";
      let i;
      let flagging = 0;

      for(i = length - 1; i >= 0 ; i--){
          if(flagging == 3){
              //for adding separator
              result = number[i]+separator+result;
              flagging = 1;
          }else{
              result = number[i] + result;
              flagging += 1;
          }
      }

      return result;
  }

  let countMoney = (money,length,separator) => {
      let result;

      if(length == 4){
          restNumber = money[1]+money[2]+money[3];
          result = money[0]+separator+restNumber;
      }else{
          result = recursiveNumber(money,length,separator);
      }

      return result;
  }

  if(getLength > 3){
      result = countMoney(getMoney,getLength,separatorStr);
  }else{
      result = getMoney;
  }

  if(isCustom === 1){
      $(".formatting").val(startCustom+result+endCustom);
  }else{
      $(".formatting").val(result);
  }
}
