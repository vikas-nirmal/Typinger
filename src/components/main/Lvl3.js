import React from 'react'
import './Lvlone.css'

export const Lvl3 = () => {

    const arr2 = ['d','d','d','d',' ','k','k','k','k',' ','d','d',' ','k','k',' ','d','d','d',' ','k','k','k',' ','d','k',' ','d','k',' ','k','k','d',' ','d','d','k',' ','d','d','d',' ','k','k','k',' ','d','d','k',' ','k','k','d',' ','d','k','d','k',' ','d','d','d','k',' ','k','k','k','d',' ','d','d','k','k',' ','d','d',' ','k','k',' ','d','d','d','d']
    var i=0;
    var result;
    function changehandler(e){
        
        let v = e.target.value
        try {
            if(v === arr2[i]){
                console.log('d is clicked');
                document.getElementById(e.target.id).style.backgroundColor='lightgreen';
                document.getElementById(e.target.id).style.color='green';
                document.getElementById(e.target.id).style.border='2px green';
                document.getElementById(e.target.id).style.borderRadius='4px';
                
            }
            else{
                    document.getElementById(e.target.id).style.backgroundColor='pink';  
                    document.getElementById(e.target.id).style.color='darkred';
                document.getElementById(e.target.id).style.border='1px darkred';
                document.getElementById(e.target.id).style.borderRadius='4px';
            }
            
        } catch (error) {
            alert('Some Error!!')
        }
        finally{
        let elm = e.target
        let next = elm.nextElementSibling
        next.focus();
        i=i+1;
        result= i;
        }
        console.log(result);
        i=result;
    }
    return (
        <>
        <h3 className='heading-fj'>Keep your hand on home row</h3>
        <div className="chardisplay">
            <input
                className="charfj elm"
                id="charfj-1"
                placeholder="d" 
                onChange={changehandler}
                autoFocus              
            ></input>
            <input
                className="charfj elm"
                id="charfj-2"
                placeholder="d"
                onChange={changehandler}
            ></input>
            <input
                className="charfj elm"
                id="charfj-3"
                placeholder="d"
                onChange={changehandler}
            ></input>
            <input
                className="charfj elm"
                id="charfj-4"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-5"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-6"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-7"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-8"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-9"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-10"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-11"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-12"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-13"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-14"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-15"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-16"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-17"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-18"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-19"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-20"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-21"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-22"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-23"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-24"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-25"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-26"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-27"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-28"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-29"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-30"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-31"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-32"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-33"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-34"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-35"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-36"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-37"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-38"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-39"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-40"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-41"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-42"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-43"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-44"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-45"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-46"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-47"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-48"
                onChange={changehandler}
                placeholder="d"
            ></input>
             <input
                className="charfj elm"
                id="charfj-49"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-50"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-51"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-52"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-53"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-54"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-55"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-56"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-57"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-58"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-59"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-60"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-61"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-62"
                onChange={changehandler}
                placeholder="d"
            ></input>
             <input
                className="charfj elm"
                id="charfj-63"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-64"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-65"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-66"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-67"
                onChange={changehandler}
                placeholder="k"
            ></input>
             <input
                className="charfj elm"
                id="charfj-68"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-69"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-70"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-71"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-72"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-73"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-74"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-75"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-76"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-77"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-78"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-79"
                onChange={changehandler}
                placeholder="k"
            ></input>
            <input
                className="charfj elm"
                id="charfj-80"
                onChange={changehandler}
                placeholder=" "
            ></input>
            <input
                className="charfj elm"
                id="charfj-81"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-82"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-83"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-84"
                onChange={changehandler}
                placeholder="d"
            ></input>
            <input
                className="charfj elm"
                id="charfj-85"
                onChange={changehandler}
                placeholder=" "
            ></input>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <a className='next-lvl' href='/Lvl4'>Next</a>
        </>
    )
}

export default Lvl3;