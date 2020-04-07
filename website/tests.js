const postData = async ( url = '', data = {})=>{
    console.log(`Data being send is ${JSON.stringify(data)}`);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData.body);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/addData', {temperature: 10, date:30, userResponse:'I am happy'});
