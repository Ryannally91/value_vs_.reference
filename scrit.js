//all primitive data types are stored as values
//-can't be changed when 'const' 
let a = 10
let b= a 
 //b = 10
 b= b +1
 //now b = 11 and a is still 10

 //REFERENCE
 //objects, arrays are refered to by MEMORY location (POINTERS)
 //even with const, they are mutable, many bugs can happen here

 const d = [1,2]
 const e = d //they point to same memory 0x1
 //if i mutate one, i mutate the other
 e.push(3)
 console.log(d)// [1,2,3] made change to 'e' but 'd' was effected too.  BC they share that memory pinter