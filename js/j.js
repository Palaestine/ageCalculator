
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const info = document.querySelector(".info");

const calBtn = document.getElementById("calBtn");

calBtn.addEventListener("click" , function calAge(){


    /******************* birthDate *****************/

    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;   // Jan == 0  //
    let y1 = birthDate.getFullYear();

    /******************* birthDate *****************/

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;  // Jan == 0  //
    let y2 = today.getFullYear();



    let d3 , m3 , y3 ; // Store difference in years and month and day


      y3 = y2 - y1;


    if(m2 >= m1) //لو شهر اليوم اكبر م شهر الميلاد
    {
        m3 = m2 - m1; 
    }
    else // لو شهر اليوم اقل م شهر الميلاد  ==> معناه اننا هنزود سنه عشان نحسب الفرق
    {       
        y3--;
        m3 = 12 + m2 - m1 // هنزود سنه
    }

    
    if(d2 >= d1) //لو يوم اليوم اكبر م يوم الميلاد
    {
        d3 = d2 - d1; 
    }
    else
    {
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }


    if(m3 < 0)
    {
        m3 = 11;
        y3--;
    }

    info.innerHTML = ` You are <span> ${y3} </span> Years ,<span> ${m3} </span> Month and <span> ${d3} </span> days old `
})

function getDaysInMonth(year,month)
{
    return new Date(year,month,0).getDate();
}