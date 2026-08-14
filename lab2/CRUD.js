import  Readline  from "readline/promises";
import{stdin,stdout} from'process';
import { readFile,writeFile } from "fs/promises";
import { get } from "http";
//import { json } from "stream/consumers";
 const FILE='product.json';

const getcart=async()=>{
    const data= await readFile(FILE,"utf-8");
    return JSON.parse(data);
};
const savecart=async(mycart)=>{
    await writeFile(FILE,JSON.stringify,null,2);
};
const addtocart =async(product)=>{

    const mycart=getcart();
    const isFound =mycart.find((item)=>item.id===product.id);
    if(isFound){
        isFound.qty+=product.qty;

    }else{
        mycart.push(product);
    }
    await savecart(mycart);
    console.log(`product added/updated with id ${product.id}into cart`);
};

const showcart=async()=>{
    const data=await getcart();
    console.table(data);
};
const main=async()=>{
    let choice;
    const cin=Readline.createInterface({input: stdin,output: stdout});
    do{
    console.log("welcome to flipkart 🧣: ")
    console.log(`1...............show cart`);
    console.log(`2...............Add product`);
    console.log(`3...............Remove product`);
    console.log(`4...............update quantity`);
    console.log(`5...............Exit`);
    choice=await cin.question("Enter your choices")
    
    switch(Number(choice))

    {
        case 1: 
        console.log('show products');
        break;
        case 2:
        let data= await cin.question("enter id,name,price,qty")
       const [id,name,price,qty] =data.split(',').map((item)=>item.trim);
       const product={
        id:Number(id),
        name,
        price:Number(price),
        qty:Number(qty),

       };
        break;
        case 3:
            console.log('Remove product')
            break;

            case 4:
                console.log('update product quantity');
                break;
                case 5:
                    console.log("see you later") ;
                    break;
                    default:
                        console.log("Invalid choices! try again 😮‍💨")
    }
    }while(choice!=5);
};
main();


