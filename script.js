var data = [
    {
        principal: 2500, time: 1.8
    },
    {
        principal: 1000, time: 5
    },
    {
        principal: 3000, time: 1
    },
    
        {principal: 2000, time: 3
    }
  ];
  
  function interestCalculator(data){
    let interestData=[];
      for (i = 0; i < data.length; i++) {
        var interest =  '';
        var rate = 0;
        var myObj = {};

        var principal = data[i].principal;
        var time = data[i].time;
        if  (principal >= 2500 && time > 1 && time <= 3) {
          rate = 3;
          interest = (principal * rate * time) / 100;

          valueInterest = {
            principal: principal,
            rate: rate,
            time: time,
            interest: interest
            };
          interestData.push(valueInterest);

        }   else if(principal >= 2500 && time >= 3) {
          rate = 4
          interest = (principal * rate * time) / 100;

          valueInterest = {
            principal: principal,
            rate: rate,
            time: time,
            interest: interest
            };
          interestData.push(valueInterest);

        }   else if(principal < 2500 || time <= 1) {
          rate = 2
          interest = (principal * rate * time) / 100;

          valueInterest = {
            principal: principal,
            rate: rate,
            time: time,
            interest: interest
            };
          interestData.push(valueInterest);

        }   else {
          rate = 1;
          interest = (principal * rate * time) / 100;
          myInterest = {
            principal: principal,
            rate: rate,
            time: time,
            interest: interest
            };
          interestData.push(myInterest);   
        }
      }  

      console.log(interestData);
      return interestData;
  }

interestCalculator(data);